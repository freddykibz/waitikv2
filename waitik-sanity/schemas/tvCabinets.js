export default {
  name: 'tvcabinets',
  title: 'TV Cabinets',
  type: 'document',
  fields: [
   
    {
      name:'name',
      title: 'Category Name',
      type: 'array',
      of :[{ type: 'string'}],
      options: {
        list: [
          {title:'French Curve', value:'frenchcurve'},
          {title:'Blue Leaf', value:'blueleaf'},
          {title:'Long Rail ', value:'longrail'},
         
          
        ]
    },
    }
  ]
}