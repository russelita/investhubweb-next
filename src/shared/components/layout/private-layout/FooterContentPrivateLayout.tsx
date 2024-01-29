import React, { useState, useEffect } from 'react';

// antd
import { Typography, Skeleton } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import iconLogo from "@/shared/images/logo/logo_investhub_footer.webp";
import iconFB from "@/shared/images/icon/Sosmed_FB.webp";
import iconWeb from "@/shared/images/icon/Sosmed_Web.webp";
import iconLinkedln from "@/shared/images/icon/Sosmed_Linkedln.webp";
import iconInsta from "@/shared/images/icon/Sosmed_Instagram.webp";
import iconBe from "@/shared/images/icon/Sosmed_Be.webp";

// hooks
// import useGetListSettings from 'src/features/konfigurasi/settings/hooks/useGetListSettings';

const FooterContentPrivateLayout = () => {
  // hooks
  // const { isLoading, stateListSettings } = useGetListSettings(
  // 	'FOOTER_CMS',
  // 	true,
  // );
  // eslint-disable-next-line no-unused-vars
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
		
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-widget footer-widget-padding">
          <div className="footer-logo">
            <Image
              src={iconLogo}
              className="img-logo-footer"
              alt="img-logo-footer"
            />
          </div>
          <div className="text-contact">{"Contact Us"}</div>
          <div className="text-address-idx">
            {
              "Indonesia Stock Exchange Building, Tower 1, 6th Floor Jl. Jend. Sudirman Kav 52-53 Jakarta Selatan 12190, Indonesia"
            }
          </div>
          <div className="text-emailfooter-idx">
            {"Email: contactcenter@idx.co.id"}
          </div>
          <div className="group-btn-sosmed-footer">
            <div className="btn-sosmed-footer">
              <Image src={iconFB} alt="btn-sosmed-footer" />
            </div>
            <div className="btn-sosmed-footer">
              <Image src={iconWeb} alt="btn-sosmed-footer" />
            </div>
            <div className="btn-sosmed-footer">
              <Image src={iconLinkedln} alt="btn-sosmed-footer" />
            </div>
            <div className="btn-sosmed-footer">
              <Image src={iconInsta} alt="btn-sosmed-footer" />
            </div>
            <div className="btn-sosmed-footer">
              <Image src={iconBe} alt="btn-sosmed-footer" />
            </div>
          </div>
        </div>
        <div className="footer-widget">
          <div className="footer-widget-heading">{"Explore"}</div>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">about</Link>
            </li>
            <li>
              <Link href="/">course</Link>
            </li>
            <li>
              <Link href="/">blog</Link>
            </li>
            <li>
              <Link href="/">contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-widget">
          <div className="footer-widget-heading">{"Category"}</div>
          <ul>
            <li>
              <Link href="/">design</Link>
            </li>
            <li>
              <Link href="/">development</Link>
            </li>
            <li>
              <Link href="/">marketing</Link>
            </li>
            <li>
              <Link href="/">business</Link>
            </li>
            <li>
              <Link href="/">lifestyle</Link>
            </li>
            <li>
              <Link href="/">photography</Link>
            </li>
            <li>
              <Link href="/">music</Link>
            </li>
          </ul>
        </div>
        <div className="footer-widget">
          <div className="footer-widget-heading-subs">{"Subscribe"}</div>
          <div className="footer-text">
            {
              "Lorem Ipsum has been them an industry printer took a galley make book."
            }
          </div>
          <div className="subscribe-form">
            <form action="#">
              <input type="email" placeholder="Email Here" />
            </form>
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContentPrivateLayout;
