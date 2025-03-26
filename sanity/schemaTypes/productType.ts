import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      title: 'Product Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Product Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      title: 'Stock',
      name: 'stock',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `$${selection.price}`,
        media: selection.media,
      };
    },
  },
});