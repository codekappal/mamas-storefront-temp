interface ProductsHeaderProps {
  title: string;
  subtitle: string;
  eyebrow: string;
}

export default function ProductsHeader({
  title,
  subtitle,
  eyebrow,
}: ProductsHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-primary-200 font-semibold text-sm uppercase tracking-wider mb-2">
          {eyebrow}
        </p>
        <h1 className="text-[32px] sm:text-[40px] font-bold mb-10">{title}</h1>
        <p className="text-primary-100 max-w-2xl text-[22px] sm:text-[28px] font-normal leading-[1.35]">{subtitle}</p>
      </div>
    </section>
  );
}
