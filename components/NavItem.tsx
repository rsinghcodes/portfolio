import cn from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-cyan-400 dark:text-cyan-300'
            : 'font-normal text-slate-600 dark:text-slate-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 last-of-type:pr-0 rounded-lg transition-all hover:text-cyan-400 dark:hover:text-cyan-300'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default NavItem;
