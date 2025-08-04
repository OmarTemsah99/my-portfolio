import { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title:
    "Contact - Omar Temsah | Full Stack Developer & Embedded Systems Engineer",
  description:
    "Get in touch with Omar Temsah for collaboration opportunities or project inquiries.",
};

export default function Contact() {
  return <ContactPage />;
}
