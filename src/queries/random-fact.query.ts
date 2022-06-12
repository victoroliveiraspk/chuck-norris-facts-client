export const randomFactQuery: string = `
  query Fact {
    random {
      categories
      created_at
      icon_url
      id
      updated_at
      url
      value
    }
  }
`