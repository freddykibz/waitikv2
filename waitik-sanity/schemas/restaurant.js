export default {
  name: 'restaurant',
  title: 'Restaurant',
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
          {type:'Bar Stools'},
          {type:'counter'},
          {type:'coffeetables'},
        ]
    },
    }
  ]
}