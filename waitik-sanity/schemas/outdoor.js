export default {
  name: 'outdoor',
  title: 'Out Doors',
  type: 'document',
  fields: [
    {
      name:'image',
      title:'Image',
      type: 'array',
      of: [{  type: 'image' }],
      options: {
        hotspot: true
      }
    },
    {
      name:'name',
      title: 'Category Name',
      type: 'array',
      of :[{ type: 'string'}],
      options: {
        list: [
          {type:'Benches'},
          {type:'parkBenches'},
          {type:'shades'},
          {type:'barCounter'},
          
        ]
    },
    }
  ]
}