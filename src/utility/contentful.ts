import {Entry} from 'contentful'

export const extractFields: any = (obj: Entry<any>) => {
  if (obj.sys && obj.fields) {
    return {
      id: obj.sys.id,
      ...obj.fields,
    }
  }

  return obj
}

export const mapFields: any = (data: any) => {
  if (typeof data !== 'object') {
    return data
  }

  if (Array.isArray(data)) {
    return data.map(element => mapFields(element))
  }

  const fields = extractFields(data)
  return Object.fromEntries(Object.keys(fields).map(key => [key, mapFields(fields[key])]))
}
