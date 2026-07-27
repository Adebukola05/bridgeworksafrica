export interface Leader {
  name: string;
  role: string;
  /** e.g. "/team/samuel-adebayo.jpg", drop the file in public/team/ and set this once a real photo exists. */
  photo?: string;
}

export const leadership: Leader[] = [
  {
    name: "Samuel Adebayo",
    role: "Founder & Chief Executive Officer",
  },
  {
    name: "Oluwaseyifunmi O. Apata",
    role: "Chief Operating Officer",
  },
  {
    name: "Ayomide I. Adeyemo",
    role: "Chief Strategy Officer",
  },
  {
    name: "Mimololuwa Alokan",
    role: "Chief Financial Officer",
  },
  {
    name: "Adebukola A. Adebamipe",
    role: "Chief Partnerships Officer",
  },
  {
    name: "Adetutu M. Adewunmi",
    role: "Chief Programmes Officer",
  },
];
