export default {
  name: 'product',
  title: 'Product',
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
      title: 'Product Name',
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
          { title: 'Furniture', value:'furniture' },
          { title: 'Doors', value:'door' }
        ]
    }
        },
    {
      name:'setting',
      title: 'Setting',
      type: 'array',
      of :[{ type: 'string'}],
      options: {
        list:[
          { title: 'livingArea', value: 'livingarea'},
          { title: 'Bed Room', value: 'bedroom'},
          { title: 'Kids Room' , value: 'kidsroom'},
          { title: 'Office', value: 'office'},
          { title: 'Restaurant', value:'restaurant' },
          { title: 'Dining', value:'dining'},
          {title: 'OutDoor', value: 'outdoor'}
        ]
      }
    },
    {
      name:'type',
      title: 'Type',
      type: 'array',
      of :[{ type: 'string'}],
      options: {
        list:[
          { title: 'Table', value:'table'},
          { title: 'chair', value:'chair'},
          { title: 'Cabinet' , value:'cabinet'},
          { title: 'Dresser', value:'dresser'},
          { title: 'Bed', value:'bed' },
          { title: 'Drawer', value:'drawer'},
          {title: 'Night Stand', value: 'nightstand'},
          {title: 'Bed Bench', value: 'bedbench'}
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
      name:'length',
      title: 'length',
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
    }
    
  ]
}