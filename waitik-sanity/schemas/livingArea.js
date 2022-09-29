export default {
  name: 'livingArea',
  title: 'Living Area',
  type: 'document',
  fields: [
    
    {
      name:'name',
      title: 'Category Name',
      type: 'array',
      of :[{ type: 'string'}],
      options: {
        list: [
          {title:'TVCabinets', value:'tvcabinets'},
          {title:'Dinning Set Table', value:'dinningsettables'},
          {title: 'Coffee Table', value: 'coffeetable'}
        ]
      }
    },
    
  ]
}