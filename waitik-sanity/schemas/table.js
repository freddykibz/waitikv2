export default {
  name: 'table',
  title: 'Table',
  type: 'document',
  fields: [
    {
      name:'image',
      title:'Image',
      type: 'array',
      of: [{  type:'image'}],
      options: {
        hotspot: true,
      }
    },
    {
      name:'name',
      title: 'Table Name',
      type: 'string'
    },
    {
      name:'series',
      title: 'Series No',
      type: 'string'
    },
    {
      name:'description',
      title: 'Description',
      type: 'string'
    },
    {
      name:'price',
      title: 'Price',
      type: 'number'
    },
    {
      name:'category',
      title:'Category',
      type:'array',
      of: [{ type :'string'}],
        options: {
          list: [ 
          { title: 'Coffee', value:'coffee' },
          { title: 'Dining', value:'dining' },
          { title: 'Console', value:'console' },
          { title: 'Bar Table', value:'bartable' },
          { title: 'Night Stand', value:'nightStand' },
          { title: 'Picnic', value:'picnic' },
          { title: 'Bedroom Vanity', value:'bedroomvanity' },
          { title: 'Round Table', value:'roundtable' },
          { title: 'End Table', value:'endtable' },
        ]
    }
        },
    {
      name:'wood',
      title:'Wood Type',
      type: 'array',
      of :[{ type: 'string'}],
      options: {
        list: [
          {title:'Pine', value:'pine'},
          {title:'Mahogany', value:'mahogany'},
          {title: 'Cyprus', value: 'cyprus'}
        ]
      }
    },
    {
      name:'width',
      title: 'Width',
      type: 'number'
    },
    {
      name:'height',
      title: 'Height',
      type: 'number'
    },
    {
      name:'weight',
      title: 'Weight',
      type: 'number'
    },
    {
      name:'discount',
      title:'Discount',
      type: 'boolean'
    },
    {
      name: 'slug',
      title:'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name:'isfeatured',
      title:'isFeatured',
      type: 'boolean'
    },
  ]
}