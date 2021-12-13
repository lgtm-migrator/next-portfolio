import Link from "next/link";
import SocialMedia from "./SocialMedia/SocialMedia";
import HoCNavLink from "../../HoC/HoCNavLink";

import {
  NavSideMenu,
  Aside,
  AsideNavContainer,
  AsideNavList,
  AsideNavListItem,
} from "./SideMenu.styles";

function HoCNavLinkSmallDevice({ navLinksData }) {
  return HoCNavLink(AsideNavList, AsideNavListItem, Link, navLinksData);
}

function SideMenu({ sideMenuOpen, navLinksData }) {
  return (
    <NavSideMenu sideMenuOpen={sideMenuOpen} aria-hidden={!sideMenuOpen}>
      <Aside>
        <AsideNavContainer sideMenuOpen={sideMenuOpen}>
          <HoCNavLinkSmallDevice navLinksData={navLinksData} />
        </AsideNavContainer>
        <SocialMedia />
      </Aside>
    </NavSideMenu>
  );
}

export default SideMenu;
