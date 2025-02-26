import { TrolleyIcon } from "@sanity/icons";
import { defineField ,defineType} from "sanity";

export const productType = defineType({
  name: 'productType',
  title: 'Product type',
  type: 'document',
  icon:TrolleyIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'ProductImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'productType',
      media: 'image',
      subtitle:'price',
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle:`$${select.subtitle}`,
        media: select.media,
      };
    },
  },
});