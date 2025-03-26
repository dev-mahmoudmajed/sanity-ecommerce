import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const salesType = defineType({
  name: 'sale',
  title: 'Sale',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Sale Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Sale Description',
    }),
    defineField({
      name: 'discountAmount',
      type: 'number',
      title: 'Discount Amount',
      description:"Amount of discount in percentage or fixed value",
    }),
    defineField({
      name: 'cupponCode',
      type:'string',
      title:'Cuppon Code', 
    }),
    defineField({
      name: 'validFrom',
      type:'datetime',
      title:'Valid From', 
    }),
    defineField({
      name: 'ValidUntil',
      type:'datetime',
      title:'Valid Until', 
    }),
    defineField({
      name: 'isActive',
      type:'boolean',
      title:'Is Active',
      description:"Toggle to active/deactivate the sale" 
    }),
  ],
  preview:{
    select:{
      title:'title',
      discoutAmount:'discountAmount',
      couponCode:'cupponCode',
      isActive:'isActive',
    },
    prepare(selection){
      const {title,discoutAmount,couponCode,isActive} = selection;
      const status = isActive ? 'Active' : 'Inactive';
      return{
        title:title,
        subtitle:`${discoutAmount}% OFF - Code: ${couponCode} - ${status}`
      }
    }
  }
})
