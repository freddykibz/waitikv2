export default {
  name: 'bedroom',
  title: 'BedRoom',
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
          {type:'beds'},
          {type :'dressers'},
          {type: 'drawers'},
          {type:'nightStands'},
          {type: 'bedBench'}
        ]
    },
    }
  ]
}