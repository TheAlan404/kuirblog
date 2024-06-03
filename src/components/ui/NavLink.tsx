import Link from "next/link";
import { useRouter } from "next/router";

import { Anchor, Box, Group, ThemeIcon } from "@mantine/core";
import { HeaderLink } from "src/config/types";

export default function NavLink({
  icon: Icon,
  label,
  link,
  activeLinks,
}: HeaderLink) {
  const router = useRouter();
  const isActive = activeLinks.includes(router.pathname);

  return (
    <Link passHref href={link}>
      <Anchor
        key={label}
        href={link}
        underline="never"
      >
        <Group justify="apart" gap={0}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            {Icon && (
              <ThemeIcon variant="outline" size={30}>
                <Icon size={18} />
              </ThemeIcon>
            )}
            <Box ml={Icon ? "md" : undefined}>{label}</Box>
          </Box>
        </Group>
      </Anchor>
    </Link>
  );
}
