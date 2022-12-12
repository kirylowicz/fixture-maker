import {Command, Flags} from '@oclif/core'
import {createClient} from 'contentful'
import {writeFile} from 'node:fs'
import * as util from 'node:util'
import {mapFields} from '../../utility/contentful'

export default class Contentful extends Command {
  static description = 'Get Contentful Entry';

  static examples = [
    `$ fmaker contentful filename --space XXX --token XXX --entry XXX --space XXX
Downloads Contentful entry and writes it recursively as json file.
`,
  ];

  static flags = {
    space: Flags.string({
      char: 's',
      description: 'Contentful space ID',
      required: true,
    }),
    token: Flags.string({
      char: 't',
      description: 'Contentful CDN access token',
      required: true,
    }),
    entry: Flags.string({char: 'e', description: 'Entry ID', required: true}),
    env: Flags.string({
      char: 'e',
      default: 'master',
      description: 'Contentful environment',
      required: false,
    }),
  };

  static args = [
    {
      name: 'filename',
      description: 'Name of the file to save the fixture to',
      required: true,
    },
  ];

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Contentful)

    const client = createClient({
      accessToken: flags.token,
      environment: flags.env,
      space: flags.space,
    })

    try {
      const data = await client.getEntries({
        include: 10,
        resolveLinks: true,
        'sys.id': flags.entry,
      })

      const items = (data?.items || []).filter(({fields}) => Boolean(fields))

      if (items.length === 0) {
        throw new Error(`Entry ${flags.entry} not found`)
      }

      const entry = mapFields(items[0].fields)

      await writeFile(
        `downloads/${args.filename}.json`,
        JSON.stringify(entry, null, 2),
        {flag: 'w'},
        err => {
          if (err?.message) {
            throw err
          }
        },
      )
      console.log(util.inspect(entry, {depth: 10}))
    } catch (error: any) {
      console.error(error.message)
    }
  }
}
