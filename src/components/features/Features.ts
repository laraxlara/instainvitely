export interface FeatureInterface {
  id: number;
  name: string;
  description: string;
}

export const features: FeatureInterface[] = [
  {
    id: 1,
    name: "Effortless Customization",
    description:
      "Customize your digital invitations effortlessly with our intuitive editing tools. Personalize every detail, from colors and fonts to images and text, to create invitations that perfectly match your event's style and theme.",
  },
  {
    id: 2,
    name: "Seamless Sharing Option",
    description:
      "Share your digital invitations seamlessly with friends and family. With just a few clicks, send your invites via email, social media, or messaging apps, ensuring that everyone on your guest list receives their invitation promptly and conveniently.",
  },
  {
    id: 3,
    name: "Instant Downloads",
    description:
      "Instantly download your customized digital invitations in high-resolution formats. No waiting for shipping or delivery - access your invitations immediately after customization, allowing you to start spreading the word about your event right away.",
  },
];
