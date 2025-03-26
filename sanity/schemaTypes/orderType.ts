import {defineArrayMember, defineField, defineType} from 'sanity'
import {BasketIcon} from '@sanity/icons'

export const orderType = defineType({
  name: 'orderType',
  title: 'Order type',
  type: 'document',
  icon:BasketIcon,
  fields: [
    defineField({
      name:"order_number",
      title:"Order number",
      type:"string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:"stripe_checkout_session_id",
      title:"Stripe Checkout Session ID",
      type:"string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:"stripe_customer_id",
      title:"Stripe Customer ID",
      type:"string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "clerk_user_id",
      title: "Store User ID",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:"customer_name",
      title:"Customer Name",
      type:"string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:"customer_email",
      title:"Customer Email",
      type:"string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:"stripe_payment_indent_id",
      title:"Stripe Payment Intent ID",
      type:"string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name:"product",
      title:"Product Bought",
      type:"array",
      of:[
        defineArrayMember({
          type:"object",
          fields:[
            defineField({
              name:"product",
              title:"Product Bought",
              type:"reference",
              to:[{type:"product"}],
            }),
            defineField({
              name:"quantity",
              title:"Quantity Purchased",
              type:"number",
            })
          ],
          preview:{
            select:{
              product:"product.name",
              quantity:"quantity",
              image:"product.image",
              price:"product.price",
              currency:"product.currency",
            },            prepare(selection){
              const {product,quantity,image}=selection
              return{
                title:`${product} x ${quantity}`,
                subtitle:`${quantity} x ${product.price} ${product.currency}`,
                media:image,
              }
            }
          }
        })
      ],
    }),
    defineField({
      name:"total_price",
      title:"Total Price",
      type:"number",
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name:"currency",
      title:"Currency",
      type:"string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:"amount_discount",
      title:"Amount Discount",
      type:"number",
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name:"status",
      title:"Order Status",
      type:"string",
      options:{
        list:[ 
          {title:"Pending",value:"pending"},
          {title:"Paid",value:"paid"},
          {title:"Shipped",value:"shipped"},
          {title:"Delivered",value:"delivered"},
          {title:"Cancelled",value:"cancelled"},
        ]
      }
    })
  ],
  preview: {
    select: {
      name: 'customer_name',
      amount: 'total_price',
      currency: 'currency',
      orderId:"order_number",
      email:"customer_email",
    },
    prepare(selection) {
      const orderIdSnippet = `${selection.orderId.slice(0, 6)}...${selection.orderId.slice(-6)}`
      return {
        title: `${selection.name} (${orderIdSnippet})`,
        subtitle: `${selection.amount} ${selection.currency} ${selection.email}`,
        media:BasketIcon,

      }
    }
  },
});