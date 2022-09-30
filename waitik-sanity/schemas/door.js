export default {
  name: 'door',
  title: 'Door',
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
      title: 'Door Name',
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
          { title: 'Entrance', value:'entrance' },
          { title: 'Interior', value:'interior' },
          { title: 'FlushDoor', value:'flushdoor' }
        ]
    }
        },
    {
      name:'functionality',
      title: 'Function',
      type: 'array',
      of :[{ type: 'string'}],
      options: {
        list:[
          { title: 'Internal Hinged', value: 'internalhinged'},
          { title: 'Swinging', value: 'swinging'},
          { title: 'Internal Double Hinged' , value: 'internaldoublehinged'},
          { title: 'Internal Bifold', value: 'internalbifold'},
          { title: 'Interior Stacker', value: 'internalbifold'},
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