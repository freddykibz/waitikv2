export default {
  name: 'dining',
  title: 'Dining Experience',
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
          {type:'chairs'},
          {type:'sets'},
        ]
    },
    }
  ]
}