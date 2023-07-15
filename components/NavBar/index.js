import Link from "next/link";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiBookOpenPageVariantOutline } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiBookmarkOutline } from "@mdi/js";
import { mdiBasketOutline } from "@mdi/js";

const StyledNavBar = styled.nav`
  background-color: #f2f2f2;
  padding: 10px;
`;

const StyledNavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledNavItem = styled.li`
  display: inline;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
    font-size: 10px;
  }
`;

// const StyledNavLink = styled.a`
//   color: #333;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

const StyledIcon = styled.span`
  margin-right: 5 px;
`;

export default function NavBar() {
  return (
    <footer>
      <StyledNavBar>
        <StyledNavList>
          <StyledNavItem>
            <Link href="/">
              <StyledIcon>
                <Icon path={mdiBookOpenPageVariantOutline} size={1} />
              </StyledIcon>
              For me
            </Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="/search">
              <StyledIcon>
                <Icon path={mdiMagnify} size={1} />
              </StyledIcon>
              Search
            </Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="">
              <StyledIcon>
                <Icon path={mdiBookmarkOutline} size={1} />
              </StyledIcon>
              Bookmark
            </Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="">
              <StyledIcon>
                <Icon path={mdiBasketOutline} size={1} />
              </StyledIcon>
              Shopping Cart
            </Link>
          </StyledNavItem>
        </StyledNavList>
      </StyledNavBar>
    </footer>
  );
}
