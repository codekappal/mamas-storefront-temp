import Link from "next/link";
import { Share2, AtSign, Bird } from "lucide-react";
import { productService, recipeService } from "@/services";

export default function Footer() {
  const categories = productService.listCategories().slice(0, 4);
  const recipes = recipeService.list().slice(0, 4);

  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Branding */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Maamis home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/website-iso-logo.png"
                alt="Maamis"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-200/80">
              Handcrafted Indian masalas, made the traditional way. From
              our family kitchen to your favourite dishes, authentic flavour in
              every spoon.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialLink label="Facebook" href="#">
                <Share2 className="h-5 w-5" />
              </SocialLink>
              <SocialLink label="Instagram" href="#">
                <AtSign className="h-5 w-5" />
              </SocialLink>
              <SocialLink label="Twitter" href="#">
                <Bird className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          {/* Navigation */}
          <FooterColumn title="Explore">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
            <FooterLink href="/recipes">Recipes</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/about">Contact</FooterLink>
          </FooterColumn>

          {/* Products */}
          <FooterColumn title="Masalas">
            {categories.map((category) => (
              <FooterLink key={category} href="/products">
                {category}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Recipes */}
          <FooterColumn title="Recipes">
            {recipes.map((recipe) => (
              <FooterLink key={recipe.id} href={`/recipes/${recipe.id}`}>
                {recipe.title}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-800 pt-6 text-sm text-primary-200/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Maamis. All rights reserved.</p>
          <p className="text-primary-200/50">Made with love for Indian cuisine.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-100">
        {title}
      </h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-primary-200/70 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="rounded-full border border-primary-700 p-2 text-primary-200/70 transition-colors hover:border-accent-500 hover:text-white"
    >
      {children}
    </a>
  );
}
