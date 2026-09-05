import { config, singleton, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings/index',
      schema: {
        logo: fields.image({
          label: 'Logo',
          directory: 'public/images/site',
          publicPath: '/images/site/',
          validation: { isRequired: true },
        }),
        nav: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            href: fields.text({ label: 'Href (path or #anchor)' }),
          }),
          {
            label: 'Primary navigation',
            itemLabel: (props) => props.fields.label.value,
          }
        ),
        headerCta: fields.object({
          label: fields.text({ label: 'Label' }),
          href: fields.url({ label: 'Href', validation: { isRequired: true } }),
        }, { label: 'Header CTA button' }),
        footer: fields.object({
          aboutText: fields.text({ label: 'About column body', multiline: true }),
          linksHeading: fields.text({ label: '"Important links" heading' }),
          links: fields.array(
            fields.object({
              label: fields.text({ label: 'Label' }),
              href: fields.text({ label: 'Href' }),
            }),
            { label: 'Footer links', itemLabel: (props) => props.fields.label.value }
          ),
          contactHeading: fields.text({ label: '"Stay in touch" heading' }),
          phone: fields.text({ label: 'Phone' }),
          email: fields.text({ label: 'Email' }),
          facebookUrl: fields.url({ label: 'Facebook URL', validation: { isRequired: true } }),
          instagramUrl: fields.url({ label: 'Instagram URL', validation: { isRequired: true } }),
          copyright: fields.text({ label: 'Copyright line' }),
        }, { label: 'Footer' }),
        cookieBanner: fields.object({
          text: fields.text({ label: 'Banner text', multiline: true }),
          acceptLabel: fields.text({ label: 'Accept button label' }),
          declineLabel: fields.text({ label: 'Decline button label' }),
        }, { label: 'Cookie consent banner' }),
        analytics: fields.object({
          gaMeasurementId: fields.text({
            label: 'Google Analytics Measurement ID (G-XXXXXXXXXX)',
            description: 'Leave empty to keep analytics fully disabled.',
          }),
          cloudflareToken: fields.text({
            label: 'Cloudflare Web Analytics site token',
            description:
              'Loads unconditionally (no cookies/localStorage used, so no consent gate). Leave empty to disable.',
          }),
        }, { label: 'Analytics' }),
      },
    }),

    home: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home',
      schema: {
        meta: fields.object({
          title: fields.text({ label: 'Meta title' }),
          description: fields.text({ label: 'Meta description', multiline: true }),
        }, { label: 'SEO metadata' }),

        hero: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          heading: fields.text({ label: 'Heading (H1)' }),
          body: fields.text({ label: 'Body', multiline: true }),
          primaryCtaLabel: fields.text({ label: 'Primary button label' }),
          primaryCtaHref: fields.url({ label: 'Primary button href', validation: { isRequired: true } }),
          secondaryCtaLabel: fields.text({ label: 'Secondary button label' }),
          secondaryCtaHref: fields.text({ label: 'Secondary button href (path or #anchor)' }),
          illustration: fields.image({
            label: 'Illustration',
            directory: 'public/images/home',
            publicPath: '/images/home/',
            validation: { isRequired: true },
          }),
          illustrationAlt: fields.text({ label: 'Illustration alt text' }),
        }, { label: 'Hero' }),

        about: fields.object({
          image: fields.image({
            label: 'Image',
            directory: 'public/images/home',
            publicPath: '/images/home/',
            validation: { isRequired: true },
          }),
          imageAlt: fields.text({ label: 'Image alt text' }),
          quote: fields.text({ label: 'Quote', multiline: true }),
          quoteAttribution: fields.text({ label: 'Quote attribution' }),
          heading: fields.text({ label: 'Heading (H2)' }),
          paragraphs: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
            label: 'Body paragraphs',
            itemLabel: (props) => props.value.slice(0, 60),
          }),
        }, { label: 'About ("O Minds & Muscles")' }),

        howItWorks: fields.object({
          heading: fields.text({ label: 'Heading (H2)' }),
          subheading: fields.text({ label: 'Subheading' }),
          steps: fields.array(
            fields.object({
              label: fields.text({ label: 'Step label (e.g. "Krok 1 – Zaczynacie razem")' }),
              body: fields.text({ label: 'Body', multiline: true }),
            }),
            { label: 'Steps', itemLabel: (props) => props.fields.label.value }
          ),
          images: fields.array(
            fields.object({
              image: fields.image({
                label: 'Image',
                directory: 'public/images/home',
                publicPath: '/images/home/',
                validation: { isRequired: true },
              }),
              alt: fields.text({ label: 'Alt text' }),
            }),
            { label: 'Supporting images', itemLabel: (props) => props.fields.alt.value }
          ),
        }, { label: 'How it works' }),

        classTypes: fields.object({
          heading: fields.text({ label: 'Heading (H2)' }),
          items: fields.array(
            fields.object({
              image: fields.image({
                label: 'Image',
                directory: 'public/images/home',
                publicPath: '/images/home/',
                validation: { isRequired: true },
              }),
              alt: fields.text({ label: 'Alt text' }),
              label: fields.text({ label: 'Category label (e.g. "RUCH I ODDECH")' }),
              body: fields.text({ label: 'Body', multiline: true }),
            }),
            { label: 'Class types', itemLabel: (props) => props.fields.label.value }
          ),
        }, { label: 'Class types ("Rodzaje zajęć")' }),

        ctaBanner: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          heading: fields.text({ label: 'Heading (H2)' }),
          buttonLabel: fields.text({ label: 'Button label' }),
          buttonHref: fields.url({ label: 'Button href', validation: { isRequired: true } }),
        }, { label: 'CTA banner ("Totalna troska")' }),

        blogTeaser: fields.object({
          heading: fields.text({ label: 'Heading (H2)' }),
          intro: fields.text({ label: 'Intro copy', multiline: true }),
          buttonLabel: fields.text({ label: 'Button label' }),
          buttonHref: fields.text({ label: 'Button href' }),
        }, { label: 'Blog teaser ("Strefa wiedzy")' }),

        newsletter: fields.object({
          heading: fields.text({ label: 'Heading' }),
          subheading: fields.text({ label: 'Subheading' }),
          submitLabel: fields.text({ label: 'Submit button label' }),
          privacyPrefix: fields.text({ label: 'Privacy copy — before the link' }),
          privacyLinkLabel: fields.text({ label: 'Privacy copy — link text' }),
          privacyLinkHref: fields.text({ label: 'Privacy policy href' }),
          privacySuffix: fields.text({ label: 'Privacy copy — after the link' }),
          successMessage: fields.text({ label: 'Success message', multiline: true }),
        }, { label: 'Newsletter signup' }),
      },
    }),

    kontakt: singleton({
      label: 'Kontakt Page',
      path: 'src/content/pages/kontakt',
      schema: {
        meta: fields.object({
          title: fields.text({ label: 'Meta title' }),
          description: fields.text({ label: 'Meta description', multiline: true }),
        }, { label: 'SEO metadata' }),
        heading: fields.text({ label: 'Heading (H1)' }),
        intro: fields.text({ label: 'Intro copy', multiline: true }),
      },
    }),
  },

  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Meta description', multiline: true }),
        category: fields.text({ label: 'Category' }),
        author: fields.text({ label: 'Author', validation: { isRequired: true } }),
        publishDate: fields.date({ label: 'Publish date', validation: { isRequired: true } }),
        featuredImage: fields.image({
          label: 'Featured image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
          validation: { isRequired: true },
        }),
        featuredImageAlt: fields.text({ label: 'Featured image alt text' }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
  },
});
