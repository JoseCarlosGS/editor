export const svgElements = [
  {
    id: "my-svg-1" + Date.now().toString(36),
    svg: `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M40.305 70.5145C57.1366 70.5145 70.7812 56.8699 70.7812 40.0383C70.7812 23.2068 57.1366 9.56214 40.305 9.56214C23.4735 9.56214 9.82886 23.2068 9.82886 40.0383C9.82886 56.8699 23.4735 70.5145 40.305 70.5145Z"
                fill="url(#paint0_radial)"></path>
            <path opacity="0.5"
                d="M40.305 70.5145C57.1366 70.5145 70.7812 56.8699 70.7812 40.0383C70.7812 23.2068 57.1366 9.56214 40.305 9.56214C23.4735 9.56214 9.82886 23.2068 9.82886 40.0383C9.82886 56.8699 23.4735 70.5145 40.305 70.5145Z"
                fill="url(#paint1_radial)"></path>
            <path
                d="M33.6574 28.9144C33.8289 27.6953 32.6098 26.762 30.3622 26.4763C28.4384 26.2287 24.1146 26.7049 20.7051 30.0382C20.0765 30.6477 20.8575 31.143 21.4289 30.762C23.4098 29.4858 28.4384 28.1906 32.0955 29.0858C33.5813 29.4668 33.6574 28.9144 33.6574 28.9144Z"
                fill="url(#paint2_linear)"></path>
            <path
                d="M46.9527 28.9144C46.7813 27.6953 48.0003 26.762 50.2479 26.4763C52.1717 26.2287 56.4956 26.7049 59.9051 30.0382C60.5336 30.6477 59.7527 31.143 59.1813 30.762C57.2003 29.4858 52.1717 28.1906 48.5146 29.0858C47.0098 29.4668 46.9527 28.9144 46.9527 28.9144Z"
                fill="url(#paint3_linear)"></path>
            <path
                d="M40.305 70.5145C57.1366 70.5145 70.7812 56.8699 70.7812 40.0383C70.7812 23.2068 57.1366 9.56214 40.305 9.56214C23.4735 9.56214 9.82886 23.2068 9.82886 40.0383C9.82886 56.8699 23.4735 70.5145 40.305 70.5145Z"
                fill="url(#paint4_radial)"></path>
            <path opacity="0.5"
                d="M40.305 70.5145C57.1366 70.5145 70.7812 56.8699 70.7812 40.0383C70.7812 23.2068 57.1366 9.56214 40.305 9.56214C23.4735 9.56214 9.82886 23.2068 9.82886 40.0383C9.82886 56.8699 23.4735 70.5145 40.305 70.5145Z"
                fill="url(#paint5_radial)"></path>
            <path opacity="0.75"
                d="M40.305 70.5145C57.1366 70.5145 70.7812 56.8699 70.7812 40.0383C70.7812 23.2068 57.1366 9.56214 40.305 9.56214C23.4735 9.56214 9.82886 23.2068 9.82886 40.0383C9.82886 56.8699 23.4735 70.5145 40.305 70.5145Z"
                fill="url(#paint6_radial)"></path>
            <path opacity="0.4"
                d="M34.1716 61.4096C38.0113 61.4096 41.124 58.2969 41.124 54.4572C41.124 50.6175 38.0113 47.5048 34.1716 47.5048C30.3319 47.5048 27.2192 50.6175 27.2192 54.4572C27.2192 58.2969 30.3319 61.4096 34.1716 61.4096Z"
                fill="url(#paint7_radial)"></path>
            <path
                d="M40.9333 57.9999C42.0063 57.9999 42.8762 56.8742 42.8762 55.4856C42.8762 54.097 42.0063 52.9714 40.9333 52.9714C39.8603 52.9714 38.9905 54.097 38.9905 55.4856C38.9905 56.8742 39.8603 57.9999 40.9333 57.9999Z"
                fill="url(#paint8_linear)"></path>
            <path
                d="M68 45.7526C68.1142 46.8002 67.4285 48.6669 66.3428 49.8859C65.5238 50.8193 64.3809 51.1812 63.2381 50.9717C63.0095 50.9336 62.8 50.8764 62.5714 50.7812C61.1047 50.1717 59.7142 49.105 58.2285 49.3336L48.8 50.705C47.5428 50.8955 46.3238 51.2193 45.1428 51.6955L40.1904 54.2669L40.4571 56.0574L45.9238 57.105C47.2 57.2383 48.4571 57.2002 49.7142 57.0288L61.5809 55.2955L64.9904 54.1907L69.4095 50.8383C70.419 49.9812 70.4 48.0955 69.3714 47.124L68 45.7526Z"
                fill="url(#paint9_linear)"></path>
            <path
                d="M48.0761 50.8382C47.0857 51.0286 46.1142 51.3143 45.1619 51.7143L40.2095 54.2858L40.4761 56.0763L45.9428 57.1239C46.9523 57.2191 47.9809 57.2191 48.9714 57.1239C48.4761 57.0286 47.9047 55.7334 47.6761 54.1144C47.4476 52.4572 47.619 51.0667 48.0761 50.8382Z"
                fill="url(#paint10_linear)"></path>
            <path
                d="M68 45.7526C68.1142 46.8002 67.4285 48.6669 66.3428 49.8859C65.5238 50.8193 64.3809 51.1812 63.238 50.9717C63.0095 50.9336 62.8 50.8764 62.5714 50.7812C61.1047 50.1717 59.7142 49.105 58.2285 49.3336L48.8 50.705C47.5428 50.8955 46.3238 51.2193 45.1428 51.6955L40.1904 54.2669L40.4571 56.0574L45.9238 57.105C47.2 57.2383 48.4571 57.2002 49.7142 57.0288L60.9714 55.3907L64.2857 54.705L69.3904 50.8574C70.4 50.0002 70.3809 48.1145 69.3523 47.1431L68 45.7526Z"
                fill="url(#paint11_linear)"></path>
            <path
                d="M60.9905 55.3907C67.3333 54.4764 73.6 52.8764 72.2476 44.5335C71.2762 38.4764 62.0571 37.924 61.5429 42.1716C62.2095 41.4478 63.1809 39.9812 63.8857 39.9621C67.1809 39.8478 68.1905 43.6383 68.2476 45.6764C68.3619 50.7812 64.1333 54.9335 60.9905 55.3907Z"
                fill="url(#paint12_linear)"></path>
            <path
                d="M66.9141 42.9715C67.7903 43.2572 68.0189 44.6477 67.9998 45.7334C67.9998 45.7334 68.2475 46.362 68.076 46.6286L68.2094 46.381C68.2094 46.362 68.2284 45.6762 68.2284 45.6572C68.1713 43.6191 67.1236 39.7905 63.8665 39.9429C60.8951 40.0953 61.1237 44.4 61.9427 45.6L62.3999 46.3429L65.9237 45.6953C65.4665 43.3715 66.2094 42.7429 66.9141 42.9715Z"
                fill="url(#paint13_linear)"></path>
            <path
                d="M61.4475 43.7905C61.5999 44.9905 62.0951 46.1334 62.6094 46.0572C63.1237 45.981 63.3332 44.8191 63.238 44.1334L67.6761 44.8001C67.7713 45.4286 67.5808 46.4953 67.1046 46.5715L62.6666 46.4953C61.638 46.4763 61.4475 44.3239 61.4475 43.7905Z"
                fill="url(#paint14_linear)"></path>
            <path
                d="M40.9716 55.4097C40.3811 59.8668 36.7811 60.8382 37.5049 59.562C38.4573 57.8287 38.6858 56.6859 38.8954 55.143C39.1049 53.6001 39.1811 52.4382 38.7239 50.5144C38.362 49.0859 41.562 50.9525 40.9716 55.4097Z"
                fill="#643800"></path>
            <path
                d="M38.7048 50.5145C39.181 52.4383 39.0857 53.6002 38.8762 55.143C38.6667 56.6859 38.4381 57.8287 37.4857 59.5621C37.2381 60.0192 37.5048 60.1907 38 60.0383C37.981 60.0383 37.5048 59.9049 37.9429 59.3145C38.6095 58.4383 39.6381 57.143 39.8857 55.2954C40.1333 53.4287 39.4857 51.924 39.0667 50.8954C38.8191 50.2097 39.3143 50.2097 39.3143 50.2097C38.8952 49.924 38.5905 50.0192 38.7048 50.5145Z"
                fill="url(#paint15_linear)"></path>
            <path opacity="0.75"
                d="M68 45.7526C68.1142 46.8002 67.4285 48.6669 66.3428 49.8859C65.5238 50.8193 64.3809 51.1812 63.238 50.9717C63.0095 50.9336 62.8 50.8764 62.5714 50.7812C61.1047 50.1717 59.7142 49.105 58.2285 49.3336L48.8 50.705C47.5428 50.8955 46.3238 51.2193 45.1428 51.6955L40.1904 54.2669L40.4571 56.0574L45.9238 57.105C47.2 57.2383 48.4571 57.2002 49.7142 57.0288L60.9714 55.3907L64.2857 54.705L69.3904 50.8574C70.4 50.0002 70.3809 48.1145 69.3523 47.1431L68 45.7526Z"
                fill="url(#paint16_radial)"></path>
            <path opacity="0.75"
                d="M60.9905 55.3907C67.3333 54.4764 73.6 52.8764 72.2476 44.5335C71.2762 38.4764 62.0571 37.924 61.5429 42.1716C62.2095 41.4478 63.1809 39.9812 63.8857 39.9621C67.1809 39.8478 68.1905 43.6383 68.2476 45.6764C68.3619 50.7812 64.1333 54.9335 60.9905 55.3907Z"
                fill="url(#paint17_radial)"></path>
            <path
                d="M26.5334 15.1239C26.8192 14.9906 26.8382 14.5906 26.5525 14.4382L23.7525 12.9715L6.99057 4.26677C6.64772 4.09534 5.27629 3.48582 3.73343 4.78106C2.09533 6.20963 2.47629 7.29534 2.59057 7.6382L11.2953 30.1715C11.4858 30.6858 12.2096 30.6668 12.4001 30.1525C14.5334 24.0953 23.162 16.6858 26.5334 15.1239Z"
                fill="url(#paint18_linear)"></path>
            <path
                d="M23.7716 12.9714L20.3049 11.1809C19.0478 10.6095 8.49538 18.5904 8.76205 23.5428L10.7811 28.7619C8.36205 22.5523 22.0763 12.0952 23.7716 12.9714Z"
                fill="url(#paint19_linear)"></path>
            <path
                d="M16.781 9.37168L16.0001 8.95263L13.3144 7.56216C12.1906 7.46692 5.90485 12.286 5.65723 15.5431L7.33342 19.8479C6.95246 15.3336 15.6382 8.76216 16.781 9.37168Z"
                fill="url(#paint20_linear)"></path>
            <path
                d="M7.20002 4.39992C6.20954 4.76182 3.63812 6.72373 2.91431 8.43801L4.66669 12.9904C3.60002 10.2094 9.16192 6.01897 10.3429 6.01897L7.20002 4.39992Z"
                fill="url(#paint21_linear)"></path>
            <path opacity="0.75"
                d="M26.5334 15.1239C26.8192 14.9906 26.8382 14.5906 26.5525 14.4382L23.7525 12.9715L6.99057 4.26677C6.64772 4.09534 5.27629 3.48582 3.73343 4.78106C2.09533 6.20963 2.47629 7.29534 2.59057 7.6382L11.2953 30.1715C11.4858 30.6858 12.2096 30.6668 12.4001 30.1525C14.5334 24.0953 23.162 16.6858 26.5334 15.1239Z"
                fill="url(#paint22_radial)"></path>
            <path opacity="0.75"
                d="M26.5334 15.1239C26.8192 14.9906 26.8382 14.5906 26.5525 14.4382L23.7525 12.9715L6.99057 4.26677C6.64772 4.09534 5.27629 3.48582 3.73343 4.78106C2.09533 6.20963 2.47629 7.29534 2.59057 7.6382L11.2953 30.1715C11.4858 30.6858 12.2096 30.6668 12.4001 30.1525C14.5334 24.0953 23.162 16.6858 26.5334 15.1239Z"
                fill="url(#paint23_radial)"></path>
            <path opacity="0.75"
                d="M26.5334 15.1239C26.8192 14.9906 26.8382 14.5906 26.5525 14.4382L23.7525 12.9715L6.99057 4.26677C6.64772 4.09534 5.27629 3.48582 3.73343 4.78106C2.09533 6.20963 2.47629 7.29534 2.59057 7.6382L11.2953 30.1715C11.4858 30.6858 12.2096 30.6668 12.4001 30.1525C14.5334 24.0953 23.162 16.6858 26.5334 15.1239Z"
                fill="url(#paint24_radial)"></path>
            <path
                d="M32.0573 35.1237C29.943 33.8095 27.2192 33.9618 25.2382 35.4476C24.2287 36.2095 23.2382 37.3714 22.6478 39.1809C22.5525 39.4856 22.4763 39.8095 22.4573 40.1333C22.4192 40.7809 22.8763 41.3714 23.6001 40.6856C29.2382 35.3714 33.1811 40.838 33.1811 40.838C33.943 41.3904 34.724 40.2476 34.5716 39.1809C34.5335 38.8761 34.4954 38.5523 34.4002 38.2666C33.9621 36.7237 33.0287 35.7523 32.0573 35.1237Z"
                fill="url(#paint25_radial)"></path>
            <path
                d="M34.4001 38.2669C34.1906 37.6193 33.9239 37.086 33.6382 36.6288C33.1811 35.9812 32.6287 35.505 32.0573 35.1431C29.943 33.8288 27.2192 33.9812 25.2382 35.4669C24.2287 36.2288 23.2382 37.3907 22.6477 39.2003C22.5906 39.3717 22.5525 39.5622 22.5144 39.7526C22.5144 39.7526 22.5144 39.7526 22.5144 39.7717C24.9906 35.905 28.5715 35.6384 28.5715 35.6384C28.5715 35.6384 32.1144 35.3336 34.5144 38.8003C34.4763 38.6098 34.4573 38.4384 34.4001 38.2669Z"
                fill="url(#paint26_linear)"></path>
            <path
                d="M48.5525 35.1237C50.6668 33.8095 53.3906 33.9618 55.3716 35.4476C56.3811 36.2095 57.3716 37.3714 57.9621 39.1809C58.0573 39.4856 58.1335 39.8095 58.1526 40.1333C58.1906 40.7809 57.7335 41.3714 57.0097 40.6856C51.3716 35.3714 47.4287 40.838 47.4287 40.838C46.6668 41.3904 45.8859 40.2476 46.0383 39.1809C46.0764 38.8761 46.1144 38.5523 46.2097 38.2666C46.6287 36.7237 47.5621 35.7523 48.5525 35.1237Z"
                fill="url(#paint27_radial)"></path>
            <path
                d="M46.1907 38.2669C46.4002 37.6193 46.6669 37.086 46.9526 36.6288C47.4098 35.9812 47.9621 35.505 48.5336 35.1431C50.6479 33.8288 53.3717 33.9812 55.3526 35.4669C56.3621 36.2288 57.3526 37.3907 57.9431 39.2003C58.0002 39.3717 58.0383 39.5622 58.0764 39.7526C58.0764 39.7526 58.0764 39.7526 58.0764 39.7717C55.6002 35.905 52.0193 35.6384 52.0193 35.6384C52.0193 35.6384 48.4764 35.3336 46.0764 38.8003C46.1145 38.6098 46.1526 38.4193 46.1907 38.2669Z"
                fill="url(#paint28_linear)"></path>
            <path
                d="M47.4287 57.1809C46.9525 57.0476 46.4573 55.8095 46.2287 54.2857C46.0192 52.8381 46.1525 51.5809 46.5144 51.2381C46.0573 51.3714 45.6001 51.5428 45.162 51.7143L45.1049 51.7333C44.8192 52.1524 44.6668 53.2 44.8382 54.4571C45.0096 55.6762 45.4668 56.6857 45.8477 57.0857L45.943 57.1047C46.4382 57.1619 46.9334 57.1809 47.4287 57.1809Z"
                fill="url(#paint29_linear)"></path>
            <g opacity="0.25">
                <path opacity="0.25"
                    d="M16.0761 31.9048C17.0666 34.762 14.5713 35.5048 15.3904 37.3525L18.1713 36.6286C17.3523 34.781 19.5237 34.0763 18.6475 31.1239L16.0761 31.9048Z"
                    fill="url(#paint30_radial)"></path>
                <path opacity="0.25"
                    d="M63.1427 22.6668C59.3331 24.8192 58.3617 20.3811 55.7903 21.3716L56.5903 25.2001C59.1427 24.2287 60.2284 28.3811 64.0379 26.2287L63.1427 22.6668Z"
                    fill="url(#paint31_radial)"></path>
                <path opacity="0.25"
                    d="M32.1713 18.2475C32.6026 18.2475 32.9523 17.8979 32.9523 17.4666C32.9523 17.0353 32.6026 16.6856 32.1713 16.6856C31.74 16.6856 31.3904 17.0353 31.3904 17.4666C31.3904 17.8979 31.74 18.2475 32.1713 18.2475Z"
                    fill="url(#paint32_radial)"></path>
                <path opacity="0.25"
                    d="M52.2094 17.9049C52.6407 17.9049 52.9904 17.5553 52.9904 17.124C52.9904 16.6927 52.6407 16.343 52.2094 16.343C51.7781 16.343 51.4285 16.6927 51.4285 17.124C51.4285 17.5553 51.7781 17.9049 52.2094 17.9049Z"
                    fill="url(#paint33_radial)"></path>
                <path opacity="0.25"
                    d="M66.3046 36.6475C66.7359 36.6475 67.0856 36.2978 67.0856 35.8665C67.0856 35.4352 66.7359 35.0855 66.3046 35.0855C65.8733 35.0855 65.5237 35.4352 65.5237 35.8665C65.5237 36.2978 65.8733 36.6475 66.3046 36.6475Z"
                    fill="url(#paint34_radial)"></path>
                <path opacity="0.25"
                    d="M17.4284 47.9239C17.8597 47.9239 18.2094 47.5742 18.2094 47.1429C18.2094 46.7116 17.8597 46.362 17.4284 46.362C16.9971 46.362 16.6475 46.7116 16.6475 47.1429C16.6475 47.5742 16.9971 47.9239 17.4284 47.9239Z"
                    fill="url(#paint35_radial)"></path>
                <path opacity="0.25"
                    d="M54.5522 64.0191C54.9835 64.0191 55.3332 63.6695 55.3332 63.2382C55.3332 62.8069 54.9835 62.4572 54.5522 62.4572C54.1209 62.4572 53.7712 62.8069 53.7712 63.2382C53.7712 63.6695 54.1209 64.0191 54.5522 64.0191Z"
                    fill="url(#paint36_radial)"></path>
                <path opacity="0.25"
                    d="M52.1713 45.0094C52.6026 45.0094 52.9523 44.6598 52.9523 44.2285C52.9523 43.7972 52.6026 43.4475 52.1713 43.4475C51.74 43.4475 51.3904 43.7972 51.3904 44.2285C51.3904 44.6598 51.74 45.0094 52.1713 45.0094Z"
                    fill="url(#paint37_radial)"></path>
                <path opacity="0.25"
                    d="M44.3809 18.6476C44.3047 17.4095 44.1904 16.1143 44.038 14.7619C39.238 17.7714 37.4094 21.4286 37.4094 21.4286L38.838 24.5143C40.3428 21.6571 42.838 19.6762 44.3809 18.6476Z"
                    fill="url(#paint38_radial)"></path>
            </g>
            <path
                d="M15.6571 30.2289C16.6476 33.086 14.1524 33.8289 14.9714 35.6765L17.7524 34.9527C16.9333 33.1051 19.1048 32.4003 18.2286 29.4479L15.6571 30.2289Z"
                fill="url(#paint39_linear)"></path>
            <path
                d="M63.1432 21.124C59.3336 23.2764 58.3622 18.8383 55.7908 19.8288L56.5908 23.6574C59.1432 22.6859 60.2289 26.8383 64.0384 24.6859L63.1432 21.124Z"
                fill="url(#paint40_linear)"></path>
            <path
                d="M64.5524 16.7621C64.9837 16.7621 65.3334 16.4124 65.3334 15.9811C65.3334 15.5498 64.9837 15.2001 64.5524 15.2001C64.1211 15.2001 63.7715 15.5498 63.7715 15.9811C63.7715 16.4124 64.1211 16.7621 64.5524 16.7621Z"
                fill="url(#paint41_linear)"></path>
            <path
                d="M32.1716 17.1051C32.6029 17.1051 32.9525 16.7554 32.9525 16.3241C32.9525 15.8928 32.6029 15.5432 32.1716 15.5432C31.7403 15.5432 31.3906 15.8928 31.3906 16.3241C31.3906 16.7554 31.7403 17.1051 32.1716 17.1051Z"
                fill="url(#paint42_linear)"></path>
            <path
                d="M52.2097 16.7621C52.641 16.7621 52.9906 16.4124 52.9906 15.9811C52.9906 15.5498 52.641 15.2001 52.2097 15.2001C51.7784 15.2001 51.4287 15.5498 51.4287 15.9811C51.4287 16.4124 51.7784 16.7621 52.2097 16.7621Z"
                fill="url(#paint43_linear)"></path>
            <path
                d="M66.3049 35.505C66.7362 35.505 67.0858 35.1553 67.0858 34.724C67.0858 34.2927 66.7362 33.9431 66.3049 33.9431C65.8736 33.9431 65.5239 34.2927 65.5239 34.724C65.5239 35.1553 65.8736 35.505 66.3049 35.505Z"
                fill="url(#paint44_linear)"></path>
            <path
                d="M17.2573 47.0288C17.6886 47.0288 18.0382 46.6792 18.0382 46.2479C18.0382 45.8166 17.6886 45.4669 17.2573 45.4669C16.826 45.4669 16.4763 45.8166 16.4763 46.2479C16.4763 46.6792 16.826 47.0288 17.2573 47.0288Z"
                fill="url(#paint45_linear)"></path>
            <path
                d="M52.0764 43.9433C52.5077 43.9433 52.8573 43.5936 52.8573 43.1623C52.8573 42.731 52.5077 42.3814 52.0764 42.3814C51.6451 42.3814 51.2954 42.731 51.2954 43.1623C51.2954 43.5936 51.6451 43.9433 52.0764 43.9433Z"
                fill="url(#paint46_linear)"></path>
            <path
                d="M11.0668 58.1906C11.4982 58.1906 11.8478 57.841 11.8478 57.4097C11.8478 56.9784 11.4982 56.6287 11.0668 56.6287C10.6355 56.6287 10.2859 56.9784 10.2859 57.4097C10.2859 57.841 10.6355 58.1906 11.0668 58.1906Z"
                fill="url(#paint47_linear)"></path>
            <path
                d="M44.7812 15.924C44.705 14.6859 44.5908 13.3907 44.4384 12.0383C39.6384 15.0479 37.8098 18.705 37.8098 18.705L39.2384 21.7907C40.7431 18.9526 43.2384 16.9526 44.7812 15.924Z"
                fill="url(#paint48_linear)"></path>
            <path
                d="M29.7335 52.6475C30.1716 61.1047 23.2573 63.2952 21.1812 63.7713C22.2669 64.6475 23.4097 65.4475 24.6288 66.1713C28.4002 64.5904 34.6097 60.6094 32.5145 51.8285C31.4859 52.0952 30.5526 52.3618 29.7335 52.6475Z"
                fill="url(#paint49_radial)"></path>
            <path
                d="M27.7525 51.1999C28.2668 61.1428 18.6096 62.438 18.6096 62.438L19.962 65.619C19.962 65.619 33.4668 62.7428 30.5334 50.3999C29.5049 50.6475 28.5715 50.9142 27.7525 51.1999Z"
                fill="url(#paint50_linear)"></path>
            <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(34.3014 27.6832) scale(36.7656)">
                    <stop stop-color="#FFE030"></stop>
                    <stop offset="1" stop-color="#FFB92E"></stop>
                </radialGradient>
                <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(34.3014 27.6832) scale(28.9251)">
                    <stop stop-color="#FFEA5F"></stop>
                    <stop offset="1" stop-color="#FFBC47" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint2_linear" x1="27.0063" y1="30.0843" x2="27.4334" y2="26.9015"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.00132565" stop-color="#3C2200"></stop>
                    <stop offset="1" stop-color="#7A4400"></stop>
                </linearGradient>
                <linearGradient id="paint3_linear" x1="53.5934" y1="30.0834" x2="53.1663" y2="26.9006"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.00132565" stop-color="#3C2200"></stop>
                    <stop offset="1" stop-color="#7A4400"></stop>
                </linearGradient>
                <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(17.4132 20.3184) rotate(-45.5348) scale(23.3841 9.60696)">
                    <stop stop-color="#EB672A" stop-opacity="0.5"></stop>
                    <stop offset="0.3025" stop-color="#E36521" stop-opacity="0.3422"></stop>
                    <stop offset="0.7868" stop-color="#CC600A" stop-opacity="0.0897045"></stop>
                    <stop offset="0.9589" stop-color="#C25E00" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(23.6815 47.616) rotate(-2.7703) scale(12.819 10.143)">
                    <stop stop-color="#FF4C00"></stop>
                    <stop offset="0.1995" stop-color="#F94C0E" stop-opacity="0.8005"></stop>
                    <stop offset="0.7145" stop-color="#EC4A2E" stop-opacity="0.2855"></stop>
                    <stop offset="1" stop-color="#E74A3A" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(56.6198 57.0298) rotate(-0.40159) scale(20.3819 4.6267)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(36.3788 55.7751) rotate(4.55396) scale(7.19701 5.08873)">
                    <stop stop-color="white" stop-opacity="0.75"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint8_linear" x1="38.9796" y1="55.4789" x2="42.8729" y2="55.4789"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.00132565" stop-color="#3C2200"></stop>
                    <stop offset="1" stop-color="#512D00"></stop>
                </linearGradient>
                <linearGradient id="paint9_linear" x1="55.1748" y1="51.5834" x2="56.5166" y2="60.7917"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF40BF"></stop>
                    <stop offset="0.8932" stop-color="#7000A3"></stop>
                </linearGradient>
                <linearGradient id="paint10_linear" x1="43.8612" y1="50.6956" x2="44.7811" y2="57.0087"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#D1F2FF"></stop>
                    <stop offset="1" stop-color="#17BBFE"></stop>
                </linearGradient>
                <linearGradient id="paint11_linear" x1="57.496" y1="52.0159" x2="71.9956" y2="45.7927"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7000A3" stop-opacity="0"></stop>
                    <stop offset="0.2242" stop-color="#530078" stop-opacity="0.2242"></stop>
                    <stop offset="0.5925" stop-color="#260038" stop-opacity="0.5925"></stop>
                    <stop offset="0.8613" stop-color="#0B000F" stop-opacity="0.8613"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="paint12_linear" x1="69.9703" y1="61.7013" x2="65.5709" y2="46.2574"
                    gradientUnits="userSpaceOnUse">
                    <stop></stop>
                    <stop offset="0.1488" stop-color="#27002D"></stop>
                    <stop offset="0.4631" stop-color="#760086"></stop>
                    <stop offset="0.7193" stop-color="#B000C7"></stop>
                    <stop offset="0.9045" stop-color="#D300F0"></stop>
                    <stop offset="1" stop-color="#E100FF"></stop>
                </linearGradient>
                <linearGradient id="paint13_linear" x1="65.5246" y1="37.664" x2="64.0816" y2="51.8546"
                    gradientUnits="userSpaceOnUse">
                    <stop></stop>
                    <stop offset="0.1488" stop-color="#27002D"></stop>
                    <stop offset="0.4631" stop-color="#760086"></stop>
                    <stop offset="0.7193" stop-color="#B000C7"></stop>
                    <stop offset="0.9045" stop-color="#D300F0"></stop>
                    <stop offset="1" stop-color="#E100FF"></stop>
                </linearGradient>
                <linearGradient id="paint14_linear" x1="65.1951" y1="48.8753" x2="64.5884" y2="44.712"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7000A3"></stop>
                    <stop offset="0.4469" stop-color="#A900D2"></stop>
                    <stop offset="0.8117" stop-color="#D200F2"></stop>
                    <stop offset="1" stop-color="#E100FF"></stop>
                </linearGradient>
                <linearGradient id="paint15_linear" x1="36.532" y1="54.8277" x2="39.7871" y2="55.2627"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.00132565" stop-color="#3C2200"></stop>
                    <stop offset="1" stop-color="#512D00"></stop>
                </linearGradient>
                <radialGradient id="paint16_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(52.9829 52.1146) rotate(-8.28692) scale(11.0217 1.22912)">
                    <stop stop-color="white" stop-opacity="0.5"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint17_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(70.361 43.6091) rotate(77.7176) scale(5.54615 1.24116)">
                    <stop stop-color="white" stop-opacity="0.5"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint18_linear" x1="21.9461" y1="7.80268" x2="4.29013" y2="20.1898"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#D1F2FF"></stop>
                    <stop offset="1" stop-color="#17BBFE"></stop>
                </linearGradient>
                <linearGradient id="paint19_linear" x1="23.4764" y1="12.6762" x2="8.05308" y2="25.5705"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF40BF"></stop>
                    <stop offset="0.7456" stop-color="#7000A3"></stop>
                </linearGradient>
                <linearGradient id="paint20_linear" x1="16.0229" y1="8.51114" x2="5.29391" y2="17.4808"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF40BF"></stop>
                    <stop offset="0.7456" stop-color="#7000A3"></stop>
                </linearGradient>
                <linearGradient id="paint21_linear" x1="9.70573" y1="5.31891" x2="2.93982" y2="10.9754"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF40BF"></stop>
                    <stop offset="0.7456" stop-color="#7000A3"></stop>
                </linearGradient>
                <radialGradient id="paint22_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.49277 16.9167) rotate(65.3021) scale(12.647 3.11471)">
                    <stop stop-color="#440063" stop-opacity="0.75"></stop>
                    <stop offset="1" stop-color="#420061" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint23_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14.0325 11.1614) rotate(31.2018) scale(12.6468 3.11512)">
                    <stop stop-color="white" stop-opacity="0.5"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint24_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(18.1242 27.5642) rotate(30.2004) scale(15.606 15.8898)">
                    <stop stop-color="#440063" stop-opacity="0.75"></stop>
                    <stop offset="1" stop-color="#420061" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint25_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.5848 37.8158) rotate(175.474) scale(4.70179 3.33396)">
                    <stop offset="0.00132565" stop-color="#7A4400"></stop>
                    <stop offset="1" stop-color="#643800"></stop>
                </radialGradient>
                <linearGradient id="paint26_linear" x1="29.0423" y1="31.8984" x2="28.669" y2="37.016"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.00132565" stop-color="#3C2200"></stop>
                    <stop offset="1" stop-color="#512D00"></stop>
                </linearGradient>
                <radialGradient id="paint27_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(52.0077 37.8157) rotate(4.52557) scale(4.70179 3.33396)">
                    <stop offset="0.00132565" stop-color="#7A4400"></stop>
                    <stop offset="1" stop-color="#643800"></stop>
                </radialGradient>
                <linearGradient id="paint28_linear" x1="51.5509" y1="31.8984" x2="51.9241" y2="37.0159"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.00132565" stop-color="#3C2200"></stop>
                    <stop offset="1" stop-color="#512D00"></stop>
                </linearGradient>
                <linearGradient id="paint29_linear" x1="45.733" y1="52.7939" x2="46.4905" y2="58.5833"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF40BF"></stop>
                    <stop offset="0.8932" stop-color="#7000A3"></stop>
                </linearGradient>
                <radialGradient id="paint30_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(25.4276 20.1193) scale(68.6114)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint31_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(20.5621 13.7082) rotate(0.0419929) scale(93.3525 93.2905)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint32_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.6657 17.2382) scale(68.6115)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint33_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.6657 17.2384) scale(68.6115)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint34_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.6657 17.2381) scale(68.6115)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint35_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(21.2181 18.286) scale(68.6115)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint36_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.6655 17.2383) scale(68.6118 68.6115)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint37_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(31.1419 14.1431) scale(68.6115 68.6112)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint38_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(24.4618 27.3772) rotate(-28.5684) scale(94.9673 94.8887)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint39_linear" x1="17.6686" y1="34.3325" x2="15.4752" y2="30.6745"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9214"></stop>
                    <stop offset="1" stop-color="#FF4E0D"></stop>
                </linearGradient>
                <linearGradient id="paint40_linear" x1="68.6915" y1="24.2906" x2="55.9634" y2="21.8981"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80DAFE"></stop>
                    <stop offset="1" stop-color="#008EE6"></stop>
                </linearGradient>
                <linearGradient id="paint41_linear" x1="59.9646" y1="15.1076" x2="69.0034" y2="16.8881"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCB4B"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint42_linear" x1="36.7304" y1="16.2253" x2="27.3392" y2="16.4561"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FBE07A"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint43_linear" x1="51.8993" y1="12.3591" x2="52.2167" y2="16.1686"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80DAFE"></stop>
                    <stop offset="1" stop-color="#008EE6"></stop>
                </linearGradient>
                <linearGradient id="paint44_linear" x1="67.6065" y1="36.1454" x2="64.4472" y2="32.717"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCB4B"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint45_linear" x1="15.6724" y1="45.9803" x2="17.8922" y2="46.3979"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#9F00E8"></stop>
                    <stop offset="1" stop-color="#7000A3"></stop>
                </linearGradient>
                <linearGradient id="paint46_linear" x1="49.58" y1="46.4366" x2="53.834" y2="40.8493"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80DAFE"></stop>
                    <stop offset="1" stop-color="#008EE6"></stop>
                </linearGradient>
                <linearGradient id="paint47_linear" x1="9.97252" y1="57.061" x2="15.0625" y2="58.8834"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9214"></stop>
                    <stop offset="1" stop-color="#FF4E0D"></stop>
                </linearGradient>
                <linearGradient id="paint48_linear" x1="56.1297" y1="6.98481" x2="35.8587" y2="21.1521"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FBE07A"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <radialGradient id="paint49_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.30806 50.5101) scale(32.404)">
                    <stop stop-color="#7A4400" stop-opacity="0.5"></stop>
                    <stop offset="0.5833" stop-color="#894D00" stop-opacity="0.2069"></stop>
                    <stop offset="0.995" stop-color="#975500" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint50_linear" x1="28.1642" y1="45.1344" x2="19.8987" y2="78.6053"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F78174"></stop>
                    <stop offset="0.3893" stop-color="#8800C7"></stop>
                    <stop offset="1" stop-color="#3640FF"></stop>
                </linearGradient>
            </defs>
        </g>
    </svg>
      `,
    preview:
      "https://ik.imagekit.io/kz4jyfhac/assets/elements/elements/partying-face-svgrepo-com.png?updatedAt=1746630926478",
  },
  {
    id: "my-party-cup" + Date.now().toString(36),
    svg: `
    <svg viewBox="0 0 24 24" width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M4.25512 22.2516L17.1465 16.2744L7.93512 7.06299L1.95798 19.9487C1.87226 20.1544 1.54655 20.983 2.43226 21.7716C3.39226 22.623 4.0494 22.3373 4.25512 22.2516Z"
                fill="url(#paint0_linear)"></path>
            <path
                d="M6.64365 9.8457L5.68365 11.9314C5.37508 12.68 10.8494 18.2057 13.9408 17.76L17.1465 16.2743C13.3465 18.0286 6.17508 10.8628 6.64365 9.8457Z"
                fill="url(#paint1_linear)"></path>
            <path
                d="M4.70078 14.0513L4.47793 14.5256L3.72364 16.1484C3.71793 16.7884 7.01507 20.0798 9.07793 20.0113L11.6951 18.7998C8.86078 19.2913 4.37507 14.7427 4.70078 14.0513Z"
                fill="url(#paint2_linear)"></path>
            <path
                d="M2.02075 19.8232C2.29504 20.3718 3.6379 21.7089 4.75218 22.0232L7.5179 20.7432L7.53504 20.7318C5.83218 21.5146 2.95218 18.6118 2.90075 17.9375L2.02075 19.8232Z"
                fill="url(#paint3_linear)"></path>
            <path opacity="0.75"
                d="M4.25512 22.2516L17.1465 16.2744L7.93512 7.06299L1.95798 19.9487C1.87226 20.1544 1.54655 20.983 2.43226 21.7716C3.39226 22.623 4.0494 22.3373 4.25512 22.2516Z"
                fill="url(#paint4_radial)"></path>
            <path opacity="0.75"
                d="M4.25512 22.2516L17.1465 16.2744L7.93512 7.06299L1.95798 19.9487C1.87226 20.1544 1.54655 20.983 2.43226 21.7716C3.39226 22.623 4.0494 22.3373 4.25512 22.2516Z"
                fill="url(#paint5_radial)"></path>
            <path
                d="M12.3409 7.1085C12.1866 7.42278 11.8837 7.4685 11.6609 7.39993L12.0266 6.67421C12.0266 6.67421 12.438 6.76564 12.4495 6.49707L12.4666 6.87421L12.3409 7.1085Z"
                fill="url(#paint6_linear)"></path>
            <path
                d="M13.3638 3.10865C13.3638 3.10865 13.6266 2.98866 13.7923 2.6458C13.9581 2.30294 13.1409 1.65723 13.1409 1.65723L12.7581 2.3258C12.7581 2.3258 13.4038 2.74865 13.2038 2.89151C12.9981 3.03437 13.3638 3.10865 13.3638 3.10865Z"
                fill="url(#paint7_linear)"></path>
            <path
                d="M20.0494 8.60592C20.1694 7.55449 19.4608 7.20591 19.2037 7.23449C19.2037 7.23449 19.1579 6.89163 19.6151 6.78306C19.9179 6.71449 20.6894 7.4002 20.4894 8.17734L20.0494 8.60592Z"
                fill="url(#paint8_linear)"></path>
            <path
                d="M17.2551 16.1945C16.6151 16.8345 14.0322 15.2802 11.4779 12.7317C8.92934 10.1831 7.37506 7.59451 8.01506 6.95451C8.65506 6.31451 11.2379 7.8688 13.7922 10.4174C16.3408 12.9717 17.8893 15.5545 17.2551 16.1945Z"
                fill="url(#paint9_linear)"></path>
            <path
                d="M17.038 15.7714C16.5523 16.2571 14.2323 14.7257 11.8609 12.3486C9.48946 9.97142 7.95232 7.65713 8.43803 7.17142C8.92375 6.68571 11.2437 8.21713 13.6152 10.5943C15.9866 12.9714 17.5237 15.2857 17.038 15.7714Z"
                fill="url(#paint10_linear)"></path>
            <path
                d="M13.7866 2.646C13.7866 2.646 13.4895 3.28028 13.4495 3.34885C13.3009 3.60028 12.8837 3.686 12.1352 3.58314C11.3866 3.48028 11.1695 3.52028 11.1352 3.526C11.1009 3.53743 10.6609 3.18314 10.6609 3.18314L10.7009 2.82314C10.7009 2.82314 10.8037 2.686 11.1466 2.73171C11.758 2.82314 13.558 3.126 13.7866 2.646Z"
                fill="url(#paint11_linear)"></path>
            <path
                d="M15.2723 13.2571C15.8723 12.5714 16.4323 13.1086 16.7865 12.6171L16.1808 12C15.8265 12.4857 15.3123 12.0286 14.678 12.6971L15.2723 13.2571Z"
                fill="url(#paint12_linear)"></path>
            <path
                d="M8.76367 4.93729C9.59224 5.42872 8.8551 6.10301 9.32367 6.48587L9.96939 5.90872C9.50082 5.52587 10.1751 4.86301 9.34653 4.37158L8.76367 4.93729Z"
                fill="url(#paint13_linear)"></path>
            <path
                d="M17.5352 7.47989C17.5581 7.47417 17.5695 7.33703 17.9066 7.09703C18.2438 6.85703 19.0038 7.22846 19.1009 7.2856C19.2038 7.34275 19.1181 8.2856 19.1181 8.2856C19.1181 8.2856 18.1695 7.27417 17.6952 7.50846C17.2209 7.73703 17.5352 7.47989 17.5352 7.47989Z"
                fill="url(#paint14_linear)"></path>
            <path
                d="M17.6608 9.82865C17.6608 9.82865 17.6265 10.2001 17.4551 10.3715C17.1465 10.6744 16.6551 10.2172 16.0322 10.3829C16.0322 10.3829 16.3179 9.65723 16.3465 9.60008C16.3465 9.60008 16.5979 9.4458 16.8551 9.59437C17.1179 9.73722 17.3465 9.78294 17.5065 9.69723C17.6665 9.61151 17.6608 9.82865 17.6608 9.82865Z"
                fill="url(#paint15_linear)"></path>
            <path
                d="M19.335 8.19416C19.335 8.19416 18.7235 8.47416 18.6435 8.51416C18.5635 8.55416 18.3807 7.1313 18.8207 6.98845C19.2664 6.84559 19.5693 6.79416 19.615 6.78845C19.6607 6.77702 18.8493 6.86273 19.335 8.19416Z"
                fill="#FFBF00"></path>
            <path
                d="M17.455 10.3656C17.7065 10.1027 18.0493 9.71417 18.0322 9.60559C17.9522 8.90845 17.3865 7.37131 17.9065 7.09131C17.9065 7.09131 17.4207 7.43417 17.2722 7.53702C17.1236 7.63988 17.015 7.91417 17.0265 8.36559C17.055 9.15417 17.6836 10.1313 17.455 10.3656Z"
                fill="#FFBF00"></path>
            <path
                d="M15.718 4.72559C15.3009 7.65701 12.3923 10.457 12.3923 10.457L12.7866 11.057C12.7866 11.057 15.9523 7.75987 16.358 4.81701L15.718 4.72559Z"
                fill="url(#paint16_linear)"></path>
            <path
                d="M10.3522 3.5029C10.2836 3.62861 10.4836 3.84004 10.9636 4.4229C11.4436 5.00575 12.6894 6.54861 12.3351 7.10861L12.7179 6.32004C12.7179 6.32004 12.7236 5.69147 12.3465 5.08004C11.7522 4.12004 10.6151 3.08576 10.7008 2.82861L10.3522 3.5029Z"
                fill="url(#paint17_linear)"></path>
            <path
                d="M12.9008 12.4227C13.0302 12.4227 13.1351 12.3178 13.1351 12.1884C13.1351 12.059 13.0302 11.9541 12.9008 11.9541C12.7714 11.9541 12.6665 12.059 12.6665 12.1884C12.6665 12.3178 12.7714 12.4227 12.9008 12.4227Z"
                fill="url(#paint18_linear)"></path>
            <path
                d="M16.1637 2.68586C16.2931 2.68586 16.398 2.58096 16.398 2.45157C16.398 2.32218 16.2931 2.21729 16.1637 2.21729C16.0343 2.21729 15.9294 2.32218 15.9294 2.45157C15.9294 2.58096 16.0343 2.68586 16.1637 2.68586Z"
                fill="url(#paint19_linear)"></path>
            <path
                d="M13.9635 6.08576C14.0929 6.08576 14.1978 5.98086 14.1978 5.85147C14.1978 5.72208 14.0929 5.61719 13.9635 5.61719C13.8341 5.61719 13.7292 5.72208 13.7292 5.85147C13.7292 5.98086 13.8341 6.08576 13.9635 6.08576Z"
                fill="url(#paint20_linear)"></path>
            <path
                d="M15.3522 10.3773C15.4816 10.3773 15.5865 10.2724 15.5865 10.143C15.5865 10.0136 15.4816 9.90869 15.3522 9.90869C15.2228 9.90869 15.1179 10.0136 15.1179 10.143C15.1179 10.2724 15.2228 10.3773 15.3522 10.3773Z"
                fill="url(#paint21_linear)"></path>
            <path
                d="M21.3752 9.80597C21.5045 9.80597 21.6094 9.70108 21.6094 9.57169C21.6094 9.4423 21.5045 9.3374 21.3752 9.3374C21.2458 9.3374 21.1409 9.4423 21.1409 9.57169C21.1409 9.70108 21.2458 9.80597 21.3752 9.80597Z"
                fill="url(#paint22_linear)"></path>
            <path
                d="M19.8837 14.7489C20.0131 14.7489 20.118 14.644 20.118 14.5146C20.118 14.3852 20.0131 14.2803 19.8837 14.2803C19.7543 14.2803 19.6494 14.3852 19.6494 14.5146C19.6494 14.644 19.7543 14.7489 19.8837 14.7489Z"
                fill="url(#paint23_linear)"></path>
            <path
                d="M18.9066 11.7313C19.036 11.7313 19.1409 11.6264 19.1409 11.497C19.1409 11.3676 19.036 11.2627 18.9066 11.2627C18.7773 11.2627 18.6724 11.3676 18.6724 11.497C18.6724 11.6264 18.7773 11.7313 18.9066 11.7313Z"
                fill="url(#paint24_linear)"></path>
            <path
                d="M20.1923 5.36603C20.3217 5.36603 20.4266 5.26114 20.4266 5.13174C20.4266 5.00235 20.3217 4.89746 20.1923 4.89746C20.0629 4.89746 19.958 5.00235 19.958 5.13174C19.958 5.26114 20.0629 5.36603 20.1923 5.36603Z"
                fill="url(#paint25_linear)"></path>
            <path
                d="M17.5636 6.13166C17.693 6.13166 17.7979 6.02676 17.7979 5.89737C17.7979 5.76798 17.693 5.66309 17.5636 5.66309C17.4342 5.66309 17.3293 5.76798 17.3293 5.89737C17.3293 6.02676 17.4342 6.13166 17.5636 6.13166Z"
                fill="url(#paint26_linear)"></path>
            <path
                d="M15.5579 15.3887C17.9464 13.4287 21.9921 13.023 21.9921 13.023L22.1236 12.1201C22.1236 12.1201 17.335 12.6915 14.7979 14.8915C15.0721 15.0801 15.3236 15.2458 15.5579 15.3887Z"
                fill="url(#paint27_linear)"></path>
            <path
                d="M9.56372 9.7428C9.72372 9.95995 9.90086 10.1771 10.0894 10.4057C10.598 9.28566 10.4894 8.40566 10.4894 8.40566L9.86658 8.01709C9.92943 8.70852 9.71801 9.37138 9.56372 9.7428Z"
                fill="url(#paint28_linear)"></path>
            <defs>
                <linearGradient id="paint0_linear" x1="1.20148" y1="8.86316" x2="11.4001" y2="20.9491"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#FBE07A"></stop>
                    <stop offset="1" stop-color="#FF40BF"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="6.74404" y1="9.74752" x2="15.2075" y2="18.211"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#9F00E8"></stop>
                    <stop offset="1" stop-color="#7000A3"></stop>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="4.39814" y1="14.355" x2="10.2679" y2="20.2247"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#9F00E8"></stop>
                    <stop offset="1" stop-color="#7000A3"></stop>
                </linearGradient>
                <linearGradient id="paint3_linear" x1="2.62378" y1="18.2066" x2="6.33847" y2="21.9213"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#9F00E8"></stop>
                    <stop offset="1" stop-color="#7000A3"></stop>
                </linearGradient>
                <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(6.7277 12.9072) rotate(119.598) scale(5.8548 1.79244)">
                    <stop stop-color="white" stop-opacity="0.5"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(10.842 18.1556) rotate(151.7) scale(9.28098 2.89463)">
                    <stop stop-color="#440063" stop-opacity="0.75"></stop>
                    <stop offset="1" stop-color="#420061" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint6_linear" x1="12.3842" y1="6.89505" x2="13.7868" y2="6.4471"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="1" stop-color="#FF4E0D"></stop>
                </linearGradient>
                <linearGradient id="paint7_linear" x1="13.6883" y1="3.41494" x2="13.0603" y2="1.85474"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="1" stop-color="#FF4E0D"></stop>
                </linearGradient>
                <linearGradient id="paint8_linear" x1="20.673" y1="8.18015" x2="18.3339" y2="6.68133"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCB4B"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint9_linear" x1="14.6798" y1="5.1234" x2="9.45348" y2="21.6009"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#FBE07A"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint10_linear" x1="16.3958" y1="8.90559" x2="8.37479" y2="14.5312"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FBE07A"></stop>
                    <stop offset="1" stop-color="white"></stop>
                </linearGradient>
                <linearGradient id="paint11_linear" x1="9.93945" y1="3.18825" x2="12.53" y2="3.149"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="1" stop-color="#FF4E0D"></stop>
                </linearGradient>
                <linearGradient id="paint12_linear" x1="16.0375" y1="12.1215" x2="15.4145" y2="13.2393"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9214"></stop>
                    <stop offset="1" stop-color="#FF4E0D"></stop>
                </linearGradient>
                <linearGradient id="paint13_linear" x1="8.75997" y1="3.52942" x2="9.70197" y2="6.2246"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80DAFE"></stop>
                    <stop offset="1" stop-color="#008EE6"></stop>
                </linearGradient>
                <linearGradient id="paint14_linear" x1="18.3866" y1="8.76647" x2="18.1709" y2="6.0477"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCB4B"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint15_linear" x1="16.1031" y1="9.91257" x2="17.6053" y2="10.1559"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCB4B"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint16_linear" x1="15.0708" y1="4.83107" x2="12.8423" y2="14.002"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#E100FF"></stop>
                    <stop offset="1" stop-color="#7000A3"></stop>
                </linearGradient>
                <linearGradient id="paint17_linear" x1="10.6877" y1="3.3285" x2="12.3362" y2="6.07601"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9214"></stop>
                    <stop offset="1" stop-color="#FF4E0D"></stop>
                </linearGradient>
                <linearGradient id="paint18_linear" x1="12.4527" y1="10.8697" x2="13.3423" y2="13.4864"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCB4B"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint19_linear" x1="15.449" y1="1.27981" x2="16.9143" y2="3.68716"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FBE07A"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint20_linear" x1="13.9286" y1="5.72182" x2="14.2949" y2="7.10866"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80DAFE"></stop>
                    <stop offset="1" stop-color="#008EE6"></stop>
                </linearGradient>
                <linearGradient id="paint21_linear" x1="15.1943" y1="9.69807" x2="15.4179" y2="10.3378"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80DAFE"></stop>
                    <stop offset="1" stop-color="#008EE6"></stop>
                </linearGradient>
                <linearGradient id="paint22_linear" x1="21.5451" y1="9.02475" x2="21.1264" y2="10.3593"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCB4B"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint23_linear" x1="19.8147" y1="13.0176" x2="19.9455" y2="15.8698"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCB4B"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
                <linearGradient id="paint24_linear" x1="18.7532" y1="11.0542" x2="18.9767" y2="11.6939"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.2544" stop-color="#9F00E8"></stop>
                    <stop offset="1" stop-color="#7000A3"></stop>
                </linearGradient>
                <linearGradient id="paint25_linear" x1="20.6471" y1="4.35101" x2="19.7836" y2="5.84252"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80DAFE"></stop>
                    <stop offset="1" stop-color="#008EE6"></stop>
                </linearGradient>
                <linearGradient id="paint26_linear" x1="17.5032" y1="5.56494" x2="17.791" y2="7.16112"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9214"></stop>
                    <stop offset="1" stop-color="#FF4E0D"></stop>
                </linearGradient>
                <linearGradient id="paint27_linear" x1="13.1785" y1="13.636" x2="21.5213" y2="13.8074"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80DAFE"></stop>
                    <stop offset="1" stop-color="#008EE6"></stop>
                </linearGradient>
                <linearGradient id="paint28_linear" x1="8.5698" y1="12.7079" x2="10.5698" y2="7.73649"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FBE07A"></stop>
                    <stop offset="1" stop-color="#E81CA2"></stop>
                </linearGradient>
            </defs>
        </g>
    </svg>
    `,
    preview:
      "https://ik.imagekit.io/kz4jyfhac/assets/elements/elements/party-popper-svgrepo-com.png?updatedAt=1746631629247",
  },
  {
    id: "rocket-svg" + Date.now().toString(36),
    svg: `
    <svg viewBox="0 0 24 24" width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M4.55993 16.7373C3.22279 18.0344 4.97707 19.423 2.28564 21.3087C2.28564 21.3087 3.8685 21.8401 5.30279 20.0344C5.79422 19.4116 6.36564 19.1544 6.36564 19.1544C6.55993 19.2687 6.41136 19.903 5.71993 20.423C5.71993 20.423 6.79993 20.4516 7.47422 19.7773C8.1485 19.103 8.60564 18.1316 8.60564 18.1316C9.0685 18.943 7.9085 19.9716 7.9085 19.9716C7.9085 19.9716 8.99993 19.6859 10.2971 18.3887C11.3028 17.383 12.0228 14.8744 10.5771 13.4344C9.13136 11.9944 6.55422 12.2516 5.29136 13.5201C4.73707 14.0744 4.17136 14.9373 4.09707 15.6459C4.09707 15.6459 5.15993 14.4973 5.53707 14.983C5.53707 14.983 3.73707 16.0687 3.44564 17.103C3.45136 17.103 4.3485 16.5659 4.55993 16.7373Z"
                fill="url(#paint0_linear)"></path>
            <path
                d="M3.56575 17.7261C2.16575 18.2861 3.06861 19.4632 2.46289 20.0689C2.46289 20.0689 3.26861 19.6289 3.25718 18.7661C3.24575 18.0632 3.56575 17.7261 3.56575 17.7261Z"
                fill="url(#paint1_linear)"></path>
            <path
                d="M3.89136 21.8117C4.25136 21.7717 4.85707 20.726 5.67993 20.8974C5.67993 20.8974 4.94279 21.9717 3.89136 21.8117Z"
                fill="url(#paint2_linear)"></path>
            <path opacity="0.5"
                d="M8.31995 19.7144C8.75995 19.5487 9.50852 19.183 10.2971 18.3887C11.1828 17.503 11.92 14.9887 10.4685 13.543C9.05138 12.1259 6.56567 12.4116 5.37138 13.6059C4.94281 14.0344 4.48567 14.6802 4.30281 15.2744C4.55995 15.0459 4.94281 14.7602 5.26281 14.7259C5.42852 14.7087 5.55995 14.7659 5.65138 14.8802L5.74281 14.9944L5.58281 15.0916C5.56567 15.103 4.17138 15.9544 3.6971 16.823C4.02281 16.6573 4.46852 16.4744 4.65138 16.623L4.75424 16.7087L4.63424 16.8287C4.1371 17.3144 4.10852 17.8116 4.08567 18.3887C4.04567 19.2173 3.99995 20.1487 2.59424 21.2287C3.07424 21.2916 4.16567 21.263 5.19995 19.9659C5.71424 19.3144 6.30852 19.0402 6.33138 19.0287L6.39995 19.0002L6.45138 19.0287C6.54852 19.0859 6.59424 19.2116 6.5771 19.3773C6.55424 19.6059 6.40567 19.9316 6.08567 20.263C6.43995 20.2173 6.99424 20.0859 7.38852 19.6916C8.03424 19.0459 8.47995 18.1087 8.48567 18.0973L8.61138 17.8287L8.73138 18.0402C9.03995 18.5887 8.69709 19.2573 8.31995 19.7144Z"
                fill="url(#paint3_linear)"></path>
            <path
                d="M2.46289 20.0689C2.85718 19.7489 3.26289 19.1204 3.25718 18.7661C3.25146 18.4404 3.34289 17.9832 3.56575 17.7261C2.58289 18.1432 2.72003 18.8004 2.84575 19.1261C2.90289 19.2689 2.8286 19.6918 2.46289 20.0689Z"
                fill="url(#paint4_radial)"></path>
            <path
                d="M3.2229 21.0346C5.08576 20.4232 5.5829 18.3089 6.77719 17.9432C7.97719 17.5775 7.67433 18.7204 7.21147 19.2404C7.21147 19.2404 8.79433 17.6518 8.80004 16.4118C8.81147 15.1718 10.4743 17.1089 9.96004 18.1146C9.96004 18.1146 12.5029 15.5718 10.4686 13.5432C8.43433 11.5146 5.73147 13.5375 5.73147 13.5375C5.73147 13.5375 7.27433 13.4746 7.13719 14.5946C7.13719 14.5946 5.94861 15.0461 5.01147 15.7946C5.01147 15.7946 5.46862 15.8461 5.7829 16.3146C5.7829 16.3146 4.3829 17.2804 4.44004 18.1089C4.52004 19.1775 3.8229 20.8404 3.2229 21.0346Z"
                fill="url(#paint5_linear)"></path>
            <path
                d="M4.52563 19.4287C5.39421 19.2115 6.15992 17.1772 7.38278 17.2915C8.05706 17.3544 7.90278 17.9372 7.90278 17.9372C7.90278 17.9372 8.37135 17.2687 8.47992 16.3715C8.58849 15.4744 10.2628 15.7772 10.1885 17.4687C10.1885 17.4687 12.0285 15.0744 9.79421 13.5487C7.33135 11.8687 5.52564 13.9772 5.52564 13.9772C5.52564 13.9772 7.21135 13.4172 7.47421 14.7544C7.47421 14.7544 6.07992 15.1429 5.56564 15.6572C5.56564 15.6572 6.15992 15.7429 6.30278 16.3772C6.30278 16.3772 4.93135 17.3829 4.97135 17.7829C5.06849 18.7372 4.52563 19.4287 4.52563 19.4287Z"
                fill="url(#paint6_linear)"></path>
            <path opacity="0.5"
                d="M4.55993 16.7373C3.22279 18.0344 4.97707 19.423 2.28564 21.3087C2.28564 21.3087 3.8685 21.8401 5.30279 20.0344C5.79422 19.4116 6.36564 19.1544 6.36564 19.1544C6.55993 19.2687 6.41136 19.903 5.71993 20.423C5.71993 20.423 6.79993 20.4516 7.47422 19.7773C8.1485 19.103 8.60564 18.1316 8.60564 18.1316C9.0685 18.943 7.9085 19.9716 7.9085 19.9716C7.9085 19.9716 8.99993 19.6859 10.2971 18.3887C11.3028 17.383 12.0228 14.8744 10.5771 13.4344C9.13136 11.9944 6.55422 12.2516 5.29136 13.5201C4.73707 14.0744 4.17136 14.9373 4.09707 15.6459C4.09707 15.6459 5.15993 14.4973 5.53707 14.983C5.53707 14.983 3.73707 16.0687 3.44564 17.103C3.45136 17.103 4.3485 16.5659 4.55993 16.7373Z"
                fill="url(#paint7_radial)"></path>
            <path opacity="0.5"
                d="M4.55993 16.7373C3.22279 18.0344 4.97707 19.423 2.28564 21.3087C2.28564 21.3087 3.8685 21.8401 5.30279 20.0344C5.79422 19.4116 6.36564 19.1544 6.36564 19.1544C6.55993 19.2687 6.41136 19.903 5.71993 20.423C5.71993 20.423 6.79993 20.4516 7.47422 19.7773C8.1485 19.103 8.60564 18.1316 8.60564 18.1316C9.0685 18.943 7.9085 19.9716 7.9085 19.9716C7.9085 19.9716 8.99993 19.6859 10.2971 18.3887C11.3028 17.383 12.0228 14.8744 10.5771 13.4344C9.13136 11.9944 6.55422 12.2516 5.29136 13.5201C4.73707 14.0744 4.17136 14.9373 4.09707 15.6459C4.09707 15.6459 5.15993 14.4973 5.53707 14.983C5.53707 14.983 3.73707 16.0687 3.44564 17.103C3.45136 17.103 4.3485 16.5659 4.55993 16.7373Z"
                fill="url(#paint8_radial)"></path>
            <path
                d="M9.62281 18.8174C10.9257 17.4288 11.6628 14.9488 10.3028 13.5888C8.94281 12.2288 6.43995 13.3717 5.33138 14.3945C5.33138 14.3945 6.21709 14.0231 6.91424 14.4688C7.61138 14.9145 5.61709 15.686 5.19995 16.9088C5.19995 16.9088 6.9771 15.8402 7.5371 16.2917C8.0971 16.7431 7.53138 18.166 6.99424 18.7031C6.99424 18.7031 8.26852 18.0517 8.95424 17.2117C9.99995 15.926 9.62281 18.8174 9.62281 18.8174Z"
                fill="url(#paint9_radial)"></path>
            <path opacity="0.5"
                d="M4.55993 16.7373C3.22279 18.0344 4.97707 19.423 2.28564 21.3087C2.28564 21.3087 3.8685 21.8401 5.30279 20.0344C5.79422 19.4116 6.36564 19.1544 6.36564 19.1544C6.55993 19.2687 6.41136 19.903 5.71993 20.423C5.71993 20.423 6.79993 20.4516 7.47422 19.7773C8.1485 19.103 8.60564 18.1316 8.60564 18.1316C9.0685 18.943 7.9085 19.9716 7.9085 19.9716C7.9085 19.9716 8.99993 19.6859 10.2971 18.3887C11.3028 17.383 12.0228 14.8744 10.5771 13.4344C9.13136 11.9944 6.55422 12.2516 5.29136 13.5201C4.73707 14.0744 4.17136 14.9373 4.09707 15.6459C4.09707 15.6459 5.15993 14.4973 5.53707 14.983C5.53707 14.983 3.73707 16.0687 3.44564 17.103C3.45136 17.103 4.3485 16.5659 4.55993 16.7373Z"
                fill="url(#paint10_radial)"></path>
            <path opacity="0.5"
                d="M3.56575 17.7261C2.16575 18.2861 3.06861 19.4632 2.46289 20.0689C2.46289 20.0689 3.26861 19.6289 3.25718 18.7661C3.24575 18.0632 3.56575 17.7261 3.56575 17.7261Z"
                fill="url(#paint11_radial)"></path>
            <path
                d="M3.89136 21.8113C4.25136 21.7713 4.77707 21.0341 5.67993 20.897C5.67993 20.897 4.94279 21.9713 3.89136 21.8113Z"
                fill="url(#paint12_radial)"></path>
            <path opacity="0.5"
                d="M3.89136 21.8117C4.25136 21.7717 4.85707 20.726 5.67993 20.8974C5.67993 20.8974 4.94279 21.9717 3.89136 21.8117Z"
                fill="url(#paint13_radial)"></path>
            <path opacity="0.5"
                d="M4.55993 16.7373C3.22279 18.0344 4.97707 19.423 2.28564 21.3087C2.28564 21.3087 3.8685 21.8401 5.30279 20.0344C5.79422 19.4116 6.36564 19.1544 6.36564 19.1544C6.55993 19.2687 6.41136 19.903 5.71993 20.423C5.71993 20.423 6.79993 20.4516 7.47422 19.7773C8.1485 19.103 8.60564 18.1316 8.60564 18.1316C9.0685 18.943 7.9085 19.9716 7.9085 19.9716C7.9085 19.9716 8.99993 19.6859 10.2971 18.3887C11.3028 17.383 12.0228 14.8744 10.5771 13.4344C9.13136 11.9944 6.55422 12.2516 5.29136 13.5201C4.73707 14.0744 4.17136 14.9373 4.09707 15.6459C4.09707 15.6459 5.15993 14.4973 5.53707 14.983C5.53707 14.983 3.73707 16.0687 3.44564 17.103C3.45136 17.103 4.3485 16.5659 4.55993 16.7373Z"
                fill="url(#paint14_radial)"></path>
            <path opacity="0.25"
                d="M4.55993 16.7373C3.22279 18.0344 4.97707 19.423 2.28564 21.3087C2.28564 21.3087 3.8685 21.8401 5.30279 20.0344C5.79422 19.4116 6.36564 19.1544 6.36564 19.1544C6.55993 19.2687 6.41136 19.903 5.71993 20.423C5.71993 20.423 6.79993 20.4516 7.47422 19.7773C8.1485 19.103 8.60564 18.1316 8.60564 18.1316C9.0685 18.943 7.9085 19.9716 7.9085 19.9716C7.9085 19.9716 8.99993 19.6859 10.2971 18.3887C11.3028 17.383 12.0228 14.8744 10.5771 13.4344C9.13136 11.9944 6.55422 12.2516 5.29136 13.5201C4.73707 14.0744 4.17136 14.9373 4.09707 15.6459C4.09707 15.6459 5.15993 14.4973 5.53707 14.983C5.53707 14.983 3.73707 16.0687 3.44564 17.103C3.45136 17.103 4.3485 16.5659 4.55993 16.7373Z"
                fill="url(#paint15_radial)"></path>
            <path opacity="0.75"
                d="M4.55993 16.7373C3.22279 18.0344 4.97707 19.423 2.28564 21.3087C2.28564 21.3087 3.8685 21.8401 5.30279 20.0344C5.79422 19.4116 6.36564 19.1544 6.36564 19.1544C6.55993 19.2687 6.41136 19.903 5.71993 20.423C5.71993 20.423 6.79993 20.4516 7.47422 19.7773C8.1485 19.103 8.60564 18.1316 8.60564 18.1316C9.0685 18.943 7.9085 19.9716 7.9085 19.9716C7.9085 19.9716 8.99993 19.6859 10.2971 18.3887C11.3028 17.383 12.0228 14.8744 10.5771 13.4344C9.13136 11.9944 6.55422 12.2516 5.29136 13.5201C4.73707 14.0744 4.17136 14.9373 4.09707 15.6459C4.09707 15.6459 5.15993 14.4973 5.53707 14.983C5.53707 14.983 3.73707 16.0687 3.44564 17.103C3.45136 17.103 4.3485 16.5659 4.55993 16.7373Z"
                fill="url(#paint16_radial)"></path>
            <path
                d="M15.3541 15.4631C15.2226 14.1889 15.5198 12.8346 16.1941 11.6117L16.4055 11.2231L13.1083 13.3774L12.8341 15.3603L11.5483 16.5946C11.8226 17.6689 11.8341 18.7203 11.8341 18.7203C14.0226 17.4117 15.3541 15.4631 15.3541 15.4631Z"
                fill="url(#paint17_linear)"></path>
            <path
                d="M11.8399 18.7258C11.8399 18.7258 11.8342 17.6629 11.5542 16.6001L12.0971 16.0801C12.2628 16.4458 12.5885 17.2687 12.6685 18.1772C12.4056 18.3601 12.1313 18.5544 11.8399 18.7258Z"
                fill="url(#paint18_linear)"></path>
            <path opacity="0.75"
                d="M15.3541 15.4631C15.2226 14.1889 15.5198 12.8346 16.1941 11.6117L16.4055 11.2231L13.1083 13.3774L12.8341 15.3603L11.5483 16.5946C11.8226 17.6689 11.8341 18.7203 11.8341 18.7203C14.0226 17.4117 15.3541 15.4631 15.3541 15.4631Z"
                fill="url(#paint19_radial)"></path>
            <path
                d="M15.6741 12.7942C15.8113 12.3942 15.9827 11.9942 16.1941 11.6113L16.3141 11.3942C16.2855 11.3771 16.257 11.3599 16.2284 11.3428L13.1141 13.3828L12.9255 14.7199C13.6341 14.4285 14.6398 13.8342 15.6741 12.7942Z"
                fill="url(#paint20_linear)"></path>
            <path
                d="M12.097 7.82862C12.0627 7.74862 12.0455 7.69147 12.017 7.61719C10.7884 8.20004 9.39983 8.36576 8.06269 8.11433C8.06269 8.11433 6.08555 9.41147 4.86841 11.7086C4.86841 11.7086 5.99984 11.8172 7.18841 12.2229L8.40555 10.9143L10.3713 10.8C10.8113 9.81147 11.3427 8.75433 12.097 7.82862Z"
                fill="url(#paint21_linear)"></path>
            <path
                d="M4.86841 11.7028C4.86841 11.7028 5.99984 11.8114 7.18841 12.2171L7.70841 11.6571C7.29127 11.44 6.38841 11.0228 5.38841 10.8457C5.20555 11.1143 5.02841 11.4 4.86841 11.7028Z"
                fill="url(#paint22_linear)"></path>
            <path opacity="0.75"
                d="M12.097 7.82862C12.0627 7.74862 12.0455 7.69147 12.017 7.61719C10.7884 8.20004 9.39983 8.36576 8.06269 8.11433C8.06269 8.11433 6.08555 9.41147 4.86841 11.7086C4.86841 11.7086 5.99984 11.8172 7.18841 12.2229L8.40555 10.9143L10.3713 10.8C10.8113 9.81147 11.3427 8.75433 12.097 7.82862Z"
                fill="url(#paint23_radial)"></path>
            <path
                d="M12.0171 7.61133C11.5371 7.97704 10.0343 9.42847 9.50854 10.8399L10.3657 10.7885C10.8057 9.81133 11.4743 8.73133 12.2285 7.80561L12.0171 7.61133Z"
                fill="url(#paint24_linear)"></path>
            <path
                d="M12.5371 7.33182C13.0457 8.16039 13.72 8.98325 14.4685 9.71468C14.5028 9.74896 14.5428 9.78325 14.5771 9.81753C15.2114 10.4232 15.8971 10.9604 16.5943 11.389C16.6571 11.3261 16.72 11.269 16.7828 11.2061C18.5828 9.40611 19.6285 8.05182 20.5257 6.33182C19.8857 5.09182 18.8343 4.04039 17.5943 3.40039C15.8743 4.29753 14.5257 5.33753 12.72 7.14325C12.6571 7.20611 12.5943 7.26896 12.5371 7.33182Z"
                fill="url(#paint25_linear)"></path>
            <path
                d="M20.5198 6.33157C21.7369 3.99443 21.5827 2.73728 21.3827 2.53728C21.1827 2.33728 19.9312 2.183 17.5884 3.40014C18.8284 4.04014 19.8798 5.09157 20.5198 6.33157Z"
                fill="url(#paint26_linear)"></path>
            <path
                d="M10.4742 13.4515C11.12 14.0973 11.7142 14.5715 11.8742 14.5715C13.3257 13.9373 15.0571 12.8744 16.5943 11.3887C15.9028 10.9601 15.2114 10.423 14.5771 9.81726C14.5428 9.78297 14.5028 9.74869 14.4685 9.7144C13.72 8.98297 13.0457 8.16011 12.5371 7.33154C11.0514 8.86869 9.98853 10.6115 9.35425 12.063C9.37711 12.2401 9.83996 12.823 10.4742 13.4515Z"
                fill="url(#paint27_linear)"></path>
            <path opacity="0.75"
                d="M10.4742 13.4515C11.12 14.0973 11.7142 14.5715 11.8742 14.5715C13.3257 13.9373 15.0571 12.8744 16.5943 11.3887C15.9028 10.9601 15.2114 10.423 14.5771 9.81726C14.5428 9.78297 14.5028 9.74869 14.4685 9.7144C13.72 8.98297 13.0457 8.16011 12.5371 7.33154C11.0514 8.86869 9.98853 10.6115 9.35425 12.063C9.37711 12.2401 9.83996 12.823 10.4742 13.4515Z"
                fill="url(#paint28_radial)"></path>
            <path opacity="0.5"
                d="M14.5771 9.81726C14.5428 9.78297 14.5028 9.74869 14.4685 9.7144C13.72 8.98297 13.0457 8.16011 12.5371 7.33154C12.4971 7.37154 12.4628 7.41154 12.4285 7.45154C13.4685 9.41726 16.6457 11.2915 14.2228 12.2801C12.6343 12.9315 11.92 13.703 11.5371 14.3887C11.6971 14.5087 11.8228 14.5715 11.88 14.5715C13.3314 13.9373 15.0628 12.8744 16.6 11.3887C15.8971 10.9601 15.2114 10.423 14.5771 9.81726Z"
                fill="url(#paint29_radial)"></path>
            <path
                d="M10.4741 13.4516C9.84555 12.823 9.38269 12.2401 9.35412 12.063L8.46269 12.4573C8.35983 12.5601 8.94269 13.3201 9.77698 14.1487C10.6055 14.9773 11.3655 15.5658 11.4684 15.463L11.8741 14.5716C11.7141 14.5716 11.1198 14.0973 10.4741 13.4516Z"
                fill="url(#paint30_linear)"></path>
            <path
                d="M10.4741 13.4516C9.84555 12.823 9.38269 12.2401 9.35412 12.063L8.46269 12.4573C8.35983 12.5601 8.94269 13.3201 9.77698 14.1487C10.6055 14.9773 11.3655 15.5658 11.4684 15.463L11.8741 14.5716C11.7141 14.5716 11.1198 14.0973 10.4741 13.4516Z"
                fill="url(#paint31_linear)"></path>
            <path
                d="M20.2743 6.78896C20.2857 6.77182 20.5143 6.34896 20.52 6.33182C19.88 5.09182 18.8285 4.04039 17.5885 3.40039C17.5714 3.41182 17.5543 3.41753 17.5371 3.42896C18.7543 4.12039 20.1314 5.67468 20.2743 6.78896Z"
                fill="url(#paint32_linear)"></path>
            <path opacity="0.75"
                d="M21.3829 2.53728C21.1829 2.33728 19.9315 2.183 17.5886 3.40014C15.8686 4.29728 14.5201 5.33729 12.7143 7.143C12.6515 7.20586 12.5943 7.26871 12.5315 7.33157C11.0458 8.86871 9.98292 10.6116 9.34863 12.063C9.3772 12.2401 9.84006 12.823 10.4686 13.4516C11.1143 14.0973 11.7086 14.5716 11.8686 14.5716C13.3201 13.9373 15.0515 12.8744 16.5886 11.3887C16.6515 11.3259 16.7144 11.2687 16.7772 11.2059C18.5772 9.40586 19.6229 8.05157 20.5201 6.33157C21.7429 3.99443 21.5886 2.73728 21.3829 2.53728Z"
                fill="url(#paint33_radial)"></path>
            <path
                d="M9.09132 16.3662C11.0113 14.8176 12.5142 13.0919 12.5542 13.0462L12.257 12.749C12.257 12.749 10.6913 14.4576 8.82275 16.0976L9.09132 16.3662Z"
                fill="url(#paint34_linear)"></path>
            <path
                d="M12.2513 12.7489C12.5999 12.0861 13.1884 11.2518 13.9427 10.3547C13.9256 10.3375 13.9084 10.3204 13.8856 10.3032C13.0684 11.0804 12.257 11.7832 11.5313 12.4004L10.6856 13.6404L9.41128 14.8918C9.18842 15.4518 8.81128 16.0975 8.81128 16.0975C10.6856 14.4575 12.2513 12.7489 12.2513 12.7489Z"
                fill="url(#paint35_linear)"></path>
            <path
                d="M9.47975 15.5031C9.47975 15.5031 9.92547 14.6974 9.88547 14.4346L9.41689 14.8974C9.19404 15.4574 8.81689 16.1031 8.81689 16.1031C9.04547 15.8974 9.26261 15.6974 9.47975 15.5031Z"
                fill="url(#paint36_linear)"></path>
            <path
                d="M12.5542 13.0464C12.8056 12.2807 13.3713 11.4236 14.097 10.4921C14.0456 10.4464 13.9999 10.4007 13.9485 10.355C13.1942 11.2521 12.6056 12.0864 12.257 12.7493C12.257 12.7493 10.6913 14.4578 8.82275 16.0978L9.09704 16.3664C11.0342 14.8007 12.5542 13.0464 12.5542 13.0464Z"
                fill="url(#paint37_linear)"></path>
            <path
                d="M9.09132 16.3662C11.0113 14.8176 12.5142 13.0919 12.5542 13.0462L12.257 12.749C12.257 12.749 10.6913 14.4576 8.82275 16.0976L9.09132 16.3662Z"
                fill="url(#paint38_linear)"></path>
            <path opacity="0.75"
                d="M12.2513 12.7489C12.5999 12.0861 13.1884 11.2518 13.9427 10.3547C13.9256 10.3375 13.9084 10.3204 13.8856 10.3032C13.0684 11.0804 12.257 11.7832 11.5313 12.4004L10.6856 13.6404L9.41128 14.8918C9.18842 15.4518 8.81128 16.0975 8.81128 16.0975C10.6856 14.4575 12.2513 12.7489 12.2513 12.7489Z"
                fill="url(#paint39_radial)"></path>
            <path opacity="0.75"
                d="M21.3829 2.53728C21.1829 2.33728 19.9315 2.183 17.5886 3.40014C15.8686 4.29728 14.5201 5.33729 12.7143 7.143C12.6515 7.20586 12.5943 7.26871 12.5315 7.33157C11.0458 8.86871 9.98292 10.6116 9.34863 12.063C9.3772 12.2401 9.84006 12.823 10.4686 13.4516C11.1143 14.0973 11.7086 14.5716 11.8686 14.5716C13.3201 13.9373 15.0515 12.8744 16.5886 11.3887C16.6515 11.3259 16.7144 11.2687 16.7772 11.2059C18.5772 9.40586 19.6229 8.05157 20.5201 6.33157C21.7429 3.99443 21.5886 2.73728 21.3829 2.53728Z"
                fill="url(#paint40_radial)"></path>
            <g opacity="0.16">
                <path opacity="0.16"
                    d="M17.2971 10.6916C16.5428 10.2459 15.7599 9.64019 15.0171 8.90305C14.2799 8.16591 13.6742 7.38305 13.2285 6.62305"
                    stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path opacity="0.16" d="M19.5371 6.61768C19.7085 6.8291 19.8628 7.03482 20.0114 7.24053" stroke="#000000"
                    stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <g opacity="0.16">
                    <path opacity="0.16"
                        d="M18.6112 4.03467C18.5369 4.0861 18.4626 4.14324 18.3884 4.20038C16.8912 5.32038 15.6226 6.4461 13.8226 8.2461C13.7598 8.30896 13.6969 8.37181 13.6398 8.43467C13.5826 8.49753 13.5198 8.55467 13.4626 8.61753"
                        stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </g>
                <path opacity="0.16"
                    d="M16.5027 10.1719C18.0855 8.56047 19.097 7.33761 20.0512 5.86332C20.0912 5.80618 20.1255 5.74904 20.1598 5.69189"
                    stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </g>
            <path opacity="0.75" d="M11.4685 14.1657C12.7828 13.4 14.4114 12.2229 15.9371 10.7314Z"
                fill="url(#paint41_radial)"></path>
            <path
                d="M17.3598 7.48588C16.6284 8.16016 15.5427 8.16588 14.9369 7.4973C14.3312 6.82873 14.4398 5.7373 15.1712 5.06302C15.9027 4.38873 16.9884 4.38302 17.5941 5.05159C18.1998 5.72016 18.0912 6.81159 17.3598 7.48588Z"
                fill="url(#paint42_linear)"></path>
            <path
                d="M17.0455 7.10857C16.4455 7.66285 15.5541 7.66857 15.057 7.11999C14.5598 6.57142 14.6455 5.67428 15.2512 5.11999C15.8513 4.56571 16.7427 4.55999 17.2398 5.10857C17.7313 5.65714 17.6455 6.55428 17.0455 7.10857Z"
                fill="url(#paint43_linear)"></path>
            <path
                d="M16.9027 6.96018C16.3655 7.45732 15.5712 7.45732 15.1312 6.9716C14.6912 6.48018 14.7655 5.68589 15.3026 5.18875C15.8398 4.69161 16.6341 4.69161 17.0741 5.17732C17.5141 5.66304 17.4398 6.46303 16.9027 6.96018Z"
                fill="url(#paint44_radial)"></path>
            <path opacity="0.5"
                d="M16.9027 6.96018C16.3655 7.45732 15.5712 7.45732 15.1312 6.9716C14.6912 6.48018 14.7655 5.68589 15.3026 5.18875C15.8398 4.69161 16.6341 4.69161 17.0741 5.17732C17.5141 5.66304 17.4398 6.46303 16.9027 6.96018Z"
                fill="url(#paint45_radial)"></path>
            <path opacity="0.5"
                d="M16.9712 5.54324C17.1712 5.7661 17.2798 6.0461 17.3026 6.33753C17.4283 5.93181 17.3598 5.49181 17.0741 5.17753C16.6341 4.6861 15.8398 4.69181 15.3026 5.18896C15.2512 5.24039 15.1998 5.29181 15.1541 5.34896C15.7655 4.97753 16.5198 5.0461 16.9712 5.54324Z"
                fill="#000000"></path>
            <path
                d="M17.0741 5.17753C16.6341 4.6861 15.8398 4.69181 15.3026 5.18896C14.7655 5.6861 14.6912 6.48038 15.1312 6.97181C15.1769 7.02324 15.2226 7.05753 15.1941 7.03467C14.7998 6.64038 14.9198 5.82896 15.4284 5.32038C15.8398 4.90896 16.6284 4.76039 17.0741 5.17753Z"
                fill="url(#paint46_linear)"></path>
            <path opacity="0.5"
                d="M17.0742 5.17732C16.6285 4.75447 15.8342 4.90875 15.4285 5.31447C14.9428 5.80018 14.8114 6.56589 15.1428 6.97732C15.1942 7.00589 15.2171 7.05732 15.1885 7.03447C15.1714 7.01732 15.1542 7.00018 15.1428 6.97732C15.1371 6.97732 15.1314 6.97161 15.1256 6.97161C15.5656 7.46304 16.3599 7.45732 16.8971 6.96018C17.4399 6.46304 17.5199 5.66875 17.0742 5.17732Z"
                fill="url(#paint47_radial)"></path>
            <path d="M20.5313 6.31439C19.8913 5.07439 18.8513 4.02867 17.6113 3.38867" stroke="#008EE6" stroke-width="0.75"
                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
                d="M16.5943 11.3887C15.9028 10.9601 15.2114 10.423 14.5771 9.81726C14.5428 9.78297 14.5028 9.74869 14.4685 9.7144C13.72 8.98297 13.0457 8.16011 12.5371 7.33154"
                stroke="#008EE6" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <defs>
                <linearGradient id="paint0_linear" x1="10.2589" y1="12.687" x2="1.15966" y2="24.6995"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF0000"></stop>
                    <stop offset="0.2317" stop-color="#FF1500"></stop>
                    <stop offset="0.7367" stop-color="#FF3D00"></stop>
                    <stop offset="0.9987" stop-color="#FF4C00"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="8.51118" y1="11.5569" x2="-0.47839" y2="23.4246"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF0000"></stop>
                    <stop offset="0.2317" stop-color="#FF1500"></stop>
                    <stop offset="0.7367" stop-color="#FF3D00"></stop>
                    <stop offset="0.9987" stop-color="#FF4C00"></stop>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="11.0782" y1="13.0501" x2="1.85678" y2="25.2237"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF0000"></stop>
                    <stop offset="0.2317" stop-color="#FF1500"></stop>
                    <stop offset="0.7367" stop-color="#FF3D00"></stop>
                    <stop offset="0.9987" stop-color="#FF4C00"></stop>
                </linearGradient>
                <linearGradient id="paint3_linear" x1="8.45606" y1="14.5703" x2="2.59621" y2="26.7449"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF8000"></stop>
                    <stop offset="0.6388" stop-color="#FF5B00"></stop>
                    <stop offset="0.9987" stop-color="#FF4C00"></stop>
                </linearGradient>
                <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.0871973 20.9423) rotate(-135) scale(4.72606 6.00135)">
                    <stop offset="0.00134333" stop-color="#FFED1C" stop-opacity="0.6"></stop>
                    <stop offset="0.9477" stop-color="#FFED1C" stop-opacity="0.0264782"></stop>
                    <stop offset="0.9914" stop-color="#FFED1C" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint5_linear" x1="3.70411" y1="21.8225" x2="8.99203" y2="14.2401"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF8000"></stop>
                    <stop offset="0.022669" stop-color="#FE7F02" stop-opacity="0.9773"></stop>
                    <stop offset="0.6663" stop-color="#ED582A" stop-opacity="0.3337"></stop>
                    <stop offset="1" stop-color="#E74939" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="paint6_linear" x1="9.7793" y1="13.9798" x2="4.99737" y2="18.2642"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFBC47"></stop>
                    <stop offset="0.1869" stop-color="#FFB137" stop-opacity="0.8131"></stop>
                    <stop offset="0.7223" stop-color="#FF940F" stop-opacity="0.2777"></stop>
                    <stop offset="1" stop-color="#FF8900" stop-opacity="0"></stop>
                </linearGradient>
                <radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.56496 15.249) rotate(-135) scale(3.65587 3.7683)">
                    <stop offset="0.00134333" stop-color="#FFBC47"></stop>
                    <stop offset="0.2941" stop-color="#FFBF4B" stop-opacity="0.7068"></stop>
                    <stop offset="0.5624" stop-color="#FEC656" stop-opacity="0.4382"></stop>
                    <stop offset="0.8201" stop-color="#FCD368" stop-opacity="0.1801"></stop>
                    <stop offset="1" stop-color="#FBE07A" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.43003 15.384) rotate(-135) scale(3.54322 3.65218)">
                    <stop offset="0.00134333" stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint9_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(10.1423 15.869) rotate(-135) scale(4.35259 6.43605)">
                    <stop offset="0.00134333" stop-color="#FFED1C" stop-opacity="0.6"></stop>
                    <stop offset="0.9477" stop-color="#FFED1C" stop-opacity="0.0264782"></stop>
                    <stop offset="0.9914" stop-color="#FFED1C" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.48378 15.3551) rotate(-42.7273) scale(1.74655 1.11729)">
                    <stop offset="0.00134333" stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint11_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(2.54239 20.1962) rotate(-135) scale(1.56145 1.98279)">
                    <stop offset="0.00134333" stop-color="#FFED1C"></stop>
                    <stop offset="0.1997" stop-color="#FFEE2B" stop-opacity="0.8013"></stop>
                    <stop offset="0.5839" stop-color="#FFF254" stop-opacity="0.4167"></stop>
                    <stop offset="1" stop-color="#FFF686" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint12_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(5.06149 21.3239) rotate(162.598) scale(1.51008 0.305545)">
                    <stop offset="0.00134333" stop-color="#FFED1C" stop-opacity="0.6"></stop>
                    <stop offset="0.9477" stop-color="#FFED1C" stop-opacity="0.0264782"></stop>
                    <stop offset="0.9914" stop-color="#FFED1C" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint13_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(3.99226 22.0321) rotate(-41.019) scale(1.4413 0.457928)">
                    <stop offset="0.00134333" stop-color="#FFED1C"></stop>
                    <stop offset="0.1997" stop-color="#FFEE2B" stop-opacity="0.8013"></stop>
                    <stop offset="0.5839" stop-color="#FFF254" stop-opacity="0.4167"></stop>
                    <stop offset="1" stop-color="#FFF686" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint14_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(2.60771 20.6213) rotate(-135) scale(4.87219 6.1869)">
                    <stop offset="0.00134333" stop-color="#FF4C00"></stop>
                    <stop offset="0.135" stop-color="#FF5B0C" stop-opacity="0.8661"></stop>
                    <stop offset="0.3941" stop-color="#FF842C" stop-opacity="0.6067"></stop>
                    <stop offset="0.7491" stop-color="#FFC45F" stop-opacity="0.2512"></stop>
                    <stop offset="1" stop-color="#FFF686" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint15_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(4.58504 15.5101) rotate(-135) scale(2.58608 3.28391)">
                    <stop offset="0.00134333" stop-color="#FFED1C"></stop>
                    <stop offset="0.1997" stop-color="#FFEE2B" stop-opacity="0.8013"></stop>
                    <stop offset="0.5839" stop-color="#FFF254" stop-opacity="0.4167"></stop>
                    <stop offset="1" stop-color="#FFF686" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint16_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.4275 15.6293) rotate(-135) scale(5.40781 6.86706)">
                    <stop offset="0.00134333" stop-color="#FFED1C"></stop>
                    <stop offset="0.1997" stop-color="#FFEE2B" stop-opacity="0.8013"></stop>
                    <stop offset="0.5839" stop-color="#FFF254" stop-opacity="0.4167"></stop>
                    <stop offset="1" stop-color="#FFF686" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint17_linear" x1="9.80373" y1="19.2642" x2="15.664" y2="12.9443"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint18_linear" x1="13.2109" y1="16.3029" x2="11.3724" y2="18.1086"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FC8D41"></stop>
                    <stop offset="0.0900324" stop-color="#FC7837"></stop>
                    <stop offset="0.294" stop-color="#FD4D24"></stop>
                    <stop offset="0.4922" stop-color="#FE2C14"></stop>
                    <stop offset="0.6802" stop-color="#FF1409"></stop>
                    <stop offset="0.854" stop-color="#FF0502"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <radialGradient id="paint19_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.95846 18.4661) rotate(45) scale(7.92842)">
                    <stop offset="0.00134333" stop-color="#FFED1C"></stop>
                    <stop offset="0.1997" stop-color="#FFEE2B" stop-opacity="0.8013"></stop>
                    <stop offset="0.5839" stop-color="#FFF254" stop-opacity="0.4167"></stop>
                    <stop offset="1" stop-color="#FFF686" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint20_linear" x1="13.348" y1="14.3002" x2="22.4311" y2="3.77241"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint21_linear" x1="4.16584" y1="11.9278" x2="9.70004" y2="9.21178"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint22_linear" x1="7.32509" y1="10.3243" x2="5.58505" y2="12.3926"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FC8D41"></stop>
                    <stop offset="0.0900324" stop-color="#FC7837"></stop>
                    <stop offset="0.294" stop-color="#FD4D24"></stop>
                    <stop offset="0.4922" stop-color="#FE2C14"></stop>
                    <stop offset="0.6802" stop-color="#FF1409"></stop>
                    <stop offset="0.854" stop-color="#FF0502"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <radialGradient id="paint23_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.17058 15.3141) rotate(45) scale(8.5278)">
                    <stop offset="0.00134333" stop-color="#FFED1C"></stop>
                    <stop offset="0.1997" stop-color="#FFEE2B" stop-opacity="0.8013"></stop>
                    <stop offset="0.5839" stop-color="#FFF254" stop-opacity="0.4167"></stop>
                    <stop offset="1" stop-color="#FFF686" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint24_linear" x1="11.8189" y1="9.17714" x2="2.89342" y2="9.59452"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint25_linear" x1="15.0481" y1="5.35093" x2="18.64" y2="8.94283"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BBCACC"></stop>
                    <stop offset="0.3717" stop-color="white"></stop>
                    <stop offset="1" stop-color="#99AFB3"></stop>
                </linearGradient>
                <linearGradient id="paint26_linear" x1="21.1365" y1="5.10762" x2="19.1811" y2="2.56991"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#008EE6"></stop>
                    <stop offset="0.688" stop-color="#80DAFE"></stop>
                    <stop offset="0.7325" stop-color="#76D5FB"></stop>
                    <stop offset="0.8071" stop-color="#5CC8F3"></stop>
                    <stop offset="0.9026" stop-color="#32B2E6"></stop>
                    <stop offset="1" stop-color="#0099D6"></stop>
                </linearGradient>
                <linearGradient id="paint27_linear" x1="14.2566" y1="13.1281" x2="10.1747" y2="9.06808"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#008EE6"></stop>
                    <stop offset="0.688" stop-color="#80DAFE"></stop>
                    <stop offset="0.7325" stop-color="#76D5FB"></stop>
                    <stop offset="0.8071" stop-color="#5CC8F3"></stop>
                    <stop offset="0.9026" stop-color="#32B2E6"></stop>
                    <stop offset="1" stop-color="#0099D6"></stop>
                </linearGradient>
                <radialGradient id="paint28_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(11.4855 14.4744) rotate(45) scale(3.88398 7.10881)">
                    <stop stop-opacity="0.75"></stop>
                    <stop offset="1" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint29_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(16.0118 13.5594) rotate(45) scale(3.88398 7.10881)">
                    <stop stop-opacity="0.75"></stop>
                    <stop offset="1" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint30_linear" x1="8.9706" y1="12.0284" x2="11.5309" y2="15.3902"
                    gradientUnits="userSpaceOnUse">
                    <stop></stop>
                    <stop offset="0.1962" stop-color="#4D4D4C"></stop>
                    <stop offset="0.7655"></stop>
                </linearGradient>
                <linearGradient id="paint31_linear" x1="8.9706" y1="12.0284" x2="11.5309" y2="15.3902"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-opacity="0"></stop>
                    <stop offset="0.1975" stop-color="#CFDCDE" stop-opacity="0.5"></stop>
                    <stop offset="0.7655" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="paint32_linear" x1="14.3333" y1="4.04492" x2="20.2046" y2="5.38551"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BBCACC"></stop>
                    <stop offset="0.3717" stop-color="white"></stop>
                    <stop offset="1" stop-color="#99AFB3"></stop>
                </linearGradient>
                <radialGradient id="paint33_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(16.076 11.4008) rotate(44.2342) scale(2.50596 8.11509)">
                    <stop stop-color="#440063" stop-opacity="0.75"></stop>
                    <stop offset="1" stop-color="#420061" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint34_linear" x1="8.66073" y1="15.8565" x2="15.4075" y2="11.5064"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint35_linear" x1="7.56475" y1="16.0858" x2="11.0444" y2="13.4365"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint36_linear" x1="10.8746" y1="13.8555" x2="8.88284" y2="15.7159"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FC8D41"></stop>
                    <stop offset="0.0900324" stop-color="#FC7837"></stop>
                    <stop offset="0.294" stop-color="#FD4D24"></stop>
                    <stop offset="0.4922" stop-color="#FE2C14"></stop>
                    <stop offset="0.6802" stop-color="#FF1409"></stop>
                    <stop offset="0.854" stop-color="#FF0502"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint37_linear" x1="10.8094" y1="15.1451" x2="13.1698" y2="8.39036"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint38_linear" x1="8.66073" y1="15.8565" x2="15.4075" y2="11.5064"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <radialGradient id="paint39_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.60239 15.2652) rotate(-39.0499) scale(5.97524 2.00375)">
                    <stop offset="0.00134333" stop-color="#FFED1C"></stop>
                    <stop offset="0.1997" stop-color="#FFEE2B" stop-opacity="0.8013"></stop>
                    <stop offset="0.5839" stop-color="#FFF254" stop-opacity="0.4167"></stop>
                    <stop offset="1" stop-color="#FFF686" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint40_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14.3426 7.31489) rotate(44.2342) scale(2.50596 8.11509)">
                    <stop stop-color="white" stop-opacity="0.5"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="paint41_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.7872 13.0483) rotate(43.8644) scale(0.608449 2.92153)">
                    <stop stop-color="#440063" stop-opacity="0.75"></stop>
                    <stop offset="1" stop-color="#420061" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient id="paint42_linear" x1="15.3192" y1="8.31134" x2="17.2033" y2="4.25406"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.2151" stop-color="#D41A10"></stop>
                    <stop offset="0.5049" stop-color="#EC0C07"></stop>
                    <stop offset="0.774" stop-color="#FA0302"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <linearGradient id="paint43_linear" x1="16.6621" y1="4.40303" x2="15.6361" y2="7.80922"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FC8D41"></stop>
                    <stop offset="0.0900324" stop-color="#FC7837"></stop>
                    <stop offset="0.294" stop-color="#FD4D24"></stop>
                    <stop offset="0.4922" stop-color="#FE2C14"></stop>
                    <stop offset="0.6802" stop-color="#FF1409"></stop>
                    <stop offset="0.854" stop-color="#FF0502"></stop>
                    <stop offset="1" stop-color="#FF0000"></stop>
                </linearGradient>
                <radialGradient id="paint44_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15.6207 6.12733) rotate(44.996) scale(3.31364 3.31341)">
                    <stop stop-color="#512D00"></stop>
                    <stop offset="1"></stop>
                </radialGradient>
                <radialGradient id="paint45_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(16.2658 5.47137) scale(2.90715)">
                    <stop offset="0.4873" stop-color="#F5CBC0" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="#E67E62"></stop>
                </radialGradient>
                <linearGradient id="paint46_linear" x1="15.9966" y1="5.06274" x2="16.1204" y2="2.86505"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BD2719"></stop>
                    <stop offset="0.0422031" stop-color="#B42717"></stop>
                    <stop offset="0.257" stop-color="#89250F"></stop>
                    <stop offset="0.4654" stop-color="#682408"></stop>
                    <stop offset="0.6634" stop-color="#502304"></stop>
                    <stop offset="0.8464" stop-color="#412201"></stop>
                    <stop offset="1" stop-color="#3C2200"></stop>
                </linearGradient>
                <radialGradient id="paint47_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.1646 4.75945) scale(3.94219)">
                    <stop stop-color="white" stop-opacity="0.5"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </radialGradient>
            </defs>
        </g>
    </svg>
    `,
    preview: "https://ik.imagekit.io/kz4jyfhac/assets/elements/elements/rocket-svgrepo-com.png?updatedAt=1746634966046",
  },
  {
    id: "xmas-tree" + Date.now().toString(36),
    svg: `
    <svg viewBox="0 0 24 24" width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path
            d="M11.0593 13.6709C11.34 15.6196 11.4989 19.6813 11.2182 20.2797C10.9375 20.878 11.1017 21.0634 11.4247 20.8675C11.7477 20.6715 11.8907 20.6609 12.0019 20.7933C12.1131 20.9204 12.3038 20.9998 12.5368 20.9998C12.7698 20.9998 12.7751 20.6927 12.9498 20.7351C13.1246 20.7774 13.4317 20.9151 13.4264 20.698C13.4211 20.4862 13.1457 20.3803 13.1457 19.8825C13.1457 19.3847 12.9339 17.8226 13.0239 17.5207C13.294 16.5781 12.9339 15.9215 13.0557 15.1166L11.0593 13.6709Z"
            fill="url(#paint0_linear)"></path>
        <path
            d="M13.4264 20.7087C13.4211 20.4968 13.1457 20.3909 13.1457 19.8932C13.1457 19.3954 12.9339 17.8332 13.0239 17.5314C13.294 16.5888 12.9339 15.9321 13.0557 15.1272L11.0593 13.6763C11.2553 15.0425 11.3929 17.4361 11.3612 18.9612C12.0178 18.5375 11.6577 18.7652 12.2349 18.654C12.8333 18.5375 12.2455 19.6496 12.9498 20.7457C13.1246 20.7881 13.4317 20.9205 13.4264 20.7087Z"
            fill="url(#paint1_linear)"></path>
        <path
            d="M7.83448 13.2154C7.63325 13.8932 5.44622 16.7316 5.16556 16.9276C4.8849 17.1288 5.7004 17.1447 6.03402 16.9964C6.36763 16.8481 6.09227 17.6636 6.73832 17.7536C7.38436 17.8437 7.59618 17.1447 7.94569 17.0811C8.29519 17.0176 8.03041 17.8543 7.95098 18.2514C7.87155 18.6486 9.70378 17.4889 10.0215 17.4571C11.1653 17.3406 9.59258 18.8286 10.5564 18.8286C11.5201 18.8286 12.1715 17.9284 12.288 17.8119C12.4045 17.6954 12.5157 18.6962 13.1564 18.5797C13.7919 18.4579 13.5536 17.5736 13.7813 17.4624C14.009 17.3512 14.6868 18.3785 15.264 18.3203C15.8412 18.262 15.9101 17.4942 15.7036 17.187C15.497 16.8799 16.7997 17.7166 17.324 17.6742C17.8535 17.6319 17.5517 16.7369 17.5517 16.4721C17.5517 16.2021 19.0821 17.0335 18.9973 16.6734C18.6796 15.3601 16.6515 13.6444 15.9101 13.1413C14.9834 12.5111 12.6534 12.7918 12.6534 12.7918L7.83448 13.2154Z"
            fill="url(#paint2_linear)"></path>
        <path
            d="M15.9152 13.1364C14.9885 12.5062 12.6585 12.7869 12.6585 12.7869L7.82903 13.2158C7.67016 13.756 6.25627 15.6518 5.54138 16.5096C5.61022 16.6314 5.65788 16.7056 5.65788 16.7056C5.65788 16.7056 6.86525 16.4196 7.02941 16.1072C7.02941 16.1072 6.73286 16.7056 6.66932 16.8962C6.66932 16.8962 7.47423 16.8962 7.67016 16.7003C7.8661 16.5043 8.63924 16.5361 8.63924 16.5361C8.63924 16.5361 8.34269 17.2351 8.25267 17.3887C8.25267 17.3887 8.31092 17.8812 9.76188 16.9862C11.2075 16.0913 10.7627 17.4893 10.6727 17.8017C10.5827 18.1194 10.7257 18.3895 10.7257 18.3895C10.7257 18.3895 11.7742 17.7382 11.9224 17.3304C12.0707 16.9227 12.3408 16.8221 12.3408 16.8221C12.3408 16.8221 12.7115 17.2986 12.8491 17.9288C12.8491 17.9288 13.4369 17.4363 13.6276 16.9121C13.6276 16.9121 14.7131 17.6005 15.3539 17.5369C15.3539 17.5369 15.0997 16.3878 15.4121 16.1495C15.4121 16.1495 16.5401 16.695 16.9372 17.2086C16.9372 17.2086 17.4456 16.3719 17.1544 15.8371C17.1544 15.8371 18.0122 15.9112 18.3247 16.3455C18.3247 16.3455 18.4147 15.8901 18.33 15.4346C17.5939 14.4497 16.4395 13.4912 15.9152 13.1364Z"
            fill="url(#paint3_linear)"></path>
        <path
            d="M16.6673 14.2221C16.0477 13.8779 15.4387 13.3325 14.9304 12.8029C13.8977 12.6387 12.6586 12.787 12.6586 12.787L7.82913 13.216C7.69145 13.6925 6.5741 15.2282 5.82214 16.1708C5.85921 16.2767 5.89098 16.3774 5.83273 16.4833C5.83273 16.4833 7.05069 15.7843 7.28899 15.4877C7.28899 15.4877 7.82383 15.8001 6.98715 16.748C6.98715 16.748 9.02061 15.8001 9.56075 16.0226C10.1009 16.245 8.55991 17.4153 8.55991 17.4153C8.55991 17.4153 10.1433 16.7163 10.5881 16.4409C11.0382 16.1602 11.5095 16.6104 11.2606 17.0552C11.0117 17.5 10.9746 17.9925 10.9746 17.9925C10.9746 17.9925 12.2985 16.2926 12.4415 16.2132C12.5792 16.1338 13.0505 17.0234 13.024 17.5265C13.024 17.5265 13.6542 16.6104 13.5747 16.2926C13.5747 16.2926 14.5491 17.1611 15.1263 17.1717C15.1263 17.1717 14.8245 16.0226 15.0839 15.583C15.3434 15.1435 16.9797 16.801 16.9797 16.801C16.9797 16.801 17.1333 15.7207 16.6196 15.3606C16.6196 15.3606 17.7952 15.4824 18.2347 16.0173C18.2347 16.0226 18.2242 15.0906 16.6673 14.2221Z"
            fill="url(#paint4_linear)"></path>
        <path
            d="M11.7743 19.5491C11.8431 19.8775 11.446 20.1846 11.483 20.3805C11.5201 20.5765 11.7955 20.5818 11.8272 20.2534C11.859 19.9251 12.1609 18.8872 11.9332 18.8872C11.7002 18.8872 11.6631 19.0037 11.7743 19.5491Z"
            fill="url(#paint5_linear)"></path>
        <path opacity="0.24"
            d="M15.9153 13.1364C14.9886 12.5062 12.6586 12.7869 12.6586 12.7869L7.8291 13.2158C7.72849 13.5547 7.1301 14.4391 6.52112 15.2599C6.73823 15.2546 7.02419 15.1858 7.28896 15.0693C7.96149 14.7727 8.67638 14.8945 8.37983 15.5035C8.08328 16.1125 9.16886 15.2599 9.67722 14.8574C10.1856 14.455 11.0223 15.2917 10.784 15.7259C10.5457 16.1601 11.3983 16.6685 12.1131 15.9218C12.828 15.1752 13.3205 15.7736 13.6594 16.0066C13.9983 16.2396 14.6391 15.9377 14.5173 15.4293C14.3955 14.921 15.3381 15.387 15.5023 14.9686C15.6664 14.5503 16.2648 14.6986 16.7255 14.8204C17.1862 14.9422 17.1597 14.4603 17.1862 14.222C17.1862 14.2114 17.1915 14.2061 17.1968 14.1955C16.6937 13.7189 16.2065 13.3323 15.9153 13.1364Z"
            fill="#366E0D"></path>
        <g opacity="0.75">
            <path opacity="0.75"
                d="M9.01529 13.9042C9.02059 13.9042 9.03118 13.8989 9.03647 13.8989C9.04177 13.8989 9.04177 13.8989 9.04706 13.8989C9.05236 13.8989 9.06295 13.8989 9.06825 13.8989C9.07354 13.8989 9.07354 13.8989 9.07884 13.8989C9.08413 13.8989 9.08943 13.8989 9.09472 13.9042H9.10002C9.10531 13.9042 9.11061 13.9095 9.11591 13.9095C9.11591 13.9095 9.1212 13.9095 9.1212 13.9148C9.1265 13.9201 9.13179 13.9201 9.13179 13.9254C9.13179 13.9254 9.13179 13.9307 9.13709 13.9307C9.14238 13.936 9.14238 13.9413 9.14768 13.9466V13.9519C9.15297 13.9148 9.15827 13.8831 9.16356 13.8513C9.16356 13.8407 9.16356 13.8301 9.16356 13.8195C9.16356 13.8089 9.16356 13.7983 9.16356 13.7877C9.16356 13.7771 9.16356 13.7718 9.15827 13.7613C9.15827 13.7613 9.15827 13.7613 9.15827 13.756C9.15827 13.7507 9.15297 13.7401 9.15297 13.7348V13.7295C9.15297 13.7242 9.14768 13.7189 9.14768 13.7136V13.7083C9.14238 13.703 9.14238 13.6977 9.13709 13.6924C9.13709 13.6924 9.13709 13.6871 9.13179 13.6871C9.1265 13.6818 9.1212 13.6818 9.1212 13.6765C9.1212 13.6765 9.11591 13.6765 9.11591 13.6712C9.11061 13.6712 9.10531 13.6659 9.10002 13.6659H9.09472C9.08943 13.6659 9.08413 13.6659 9.07884 13.6606C9.07354 13.6606 9.07354 13.6606 9.06825 13.6606C9.06295 13.6606 9.05766 13.6606 9.04706 13.6606C9.04177 13.6606 9.04177 13.6606 9.03647 13.6606C9.03118 13.6606 9.02059 13.6659 9.01529 13.6659C9.01 13.6659 9.0047 13.6659 8.9994 13.6712C8.98881 13.6712 8.98352 13.6765 8.97293 13.6818C8.96763 13.6818 8.96234 13.6871 8.95704 13.6871C8.94645 13.6924 8.93586 13.6924 8.93056 13.6977C8.92527 13.6977 8.91997 13.703 8.91468 13.703C8.90409 13.7083 8.8935 13.7136 8.8829 13.7189C8.87761 13.7242 8.87231 13.7242 8.86172 13.7295C8.85113 13.7348 8.83525 13.7454 8.81936 13.7507C8.81406 13.756 8.80877 13.756 8.80347 13.7613C8.78229 13.7718 8.76111 13.7877 8.73993 13.8036C8.23686 14.1372 7.7179 14.2961 7.52197 14.2696C7.50078 14.312 7.47431 14.3491 7.45842 14.3861C7.44783 14.402 7.44253 14.4179 7.44253 14.4285C7.40017 14.6191 8.08858 14.4761 8.74522 14.0419C8.7664 14.026 8.78759 14.0154 8.80877 13.9996C8.81406 13.9943 8.81936 13.9943 8.82465 13.989C8.84054 13.9784 8.85113 13.9731 8.86702 13.9678C8.87231 13.9625 8.87761 13.9625 8.8882 13.9572C8.89879 13.9519 8.90938 13.9466 8.91997 13.9413C8.92527 13.936 8.93056 13.936 8.93586 13.936C8.94645 13.9307 8.95704 13.9254 8.96234 13.9254C8.96763 13.9254 8.97293 13.9201 8.97822 13.9201C8.98881 13.9148 8.99411 13.9148 9.0047 13.9095C9.0047 13.9042 9.01 13.9042 9.01529 13.9042Z"
                fill="#24420D"></path>
            <path opacity="0.75"
                d="M16.6832 14.5238C16.6832 14.5185 16.6832 14.5132 16.6779 14.508C16.6779 14.5027 16.6779 14.4974 16.6726 14.4921C16.6726 14.4815 16.6673 14.4762 16.662 14.4656C16.6514 14.4444 16.6408 14.4179 16.6302 14.3915H16.6249C16.6196 14.3915 16.6143 14.3915 16.6143 14.3967C16.6091 14.3967 16.6038 14.3967 16.5985 14.3967C16.5932 14.3967 16.5879 14.3967 16.5826 14.3967C16.5773 14.3967 16.572 14.3967 16.5614 14.3967C16.5561 14.3967 16.5508 14.3967 16.5455 14.3967C16.5402 14.3967 16.5296 14.3967 16.519 14.3915C16.5137 14.3915 16.5084 14.3915 16.4978 14.3862C16.4873 14.3862 16.4767 14.3809 16.4661 14.3809C16.4608 14.3809 16.4502 14.3756 16.4449 14.3756C16.4343 14.3703 16.4237 14.3703 16.4078 14.365C16.4025 14.365 16.3919 14.3597 16.3866 14.3597C16.3708 14.3544 16.3549 14.3491 16.339 14.3438C16.3337 14.3438 16.3231 14.3385 16.3178 14.3385C16.2913 14.3279 16.2701 14.3173 16.2437 14.3067C15.3646 13.9466 15.2428 12.9352 15.1528 13.756C15.121 14.042 15.0575 14.2644 14.9728 14.4179C14.9516 14.4603 14.9251 14.4974 14.8986 14.5291C14.7397 14.7198 14.5226 14.7198 14.2896 14.508C14.0672 14.3014 13.9825 14.3544 13.9454 14.4974C13.9137 14.6139 13.919 14.7939 13.9031 14.9422C13.8978 14.974 13.8978 15.0057 13.8872 15.0322C13.8766 15.0746 13.866 15.1116 13.8501 15.1381C13.8342 15.1646 13.8077 15.1858 13.7813 15.1911C13.7442 15.1964 13.6912 15.1858 13.6224 15.1381C13.1988 14.8628 13.0081 14.3279 12.701 14.4603C12.6851 14.4709 12.6639 14.4815 12.6427 14.4921C12.5527 14.5503 12.4574 14.6615 12.3409 14.8522C12.235 15.0216 12.1344 15.1593 12.0338 15.2599C11.9226 15.3764 11.8166 15.4505 11.716 15.4823C11.6737 15.4929 11.6366 15.5035 11.5995 15.5035H11.5942C11.5889 15.5035 11.5836 15.5035 11.5784 15.5035C11.4777 15.4929 11.3877 15.44 11.303 15.334C11.2712 15.2917 11.2394 15.244 11.213 15.1911C11.1653 15.101 11.1176 14.9898 11.0806 14.8628C10.8264 14.0419 10.7364 13.8037 10.0374 14.3226C9.50782 14.7198 9.12125 14.778 9.01004 14.6456C9.00475 14.6615 8.99945 14.6827 8.99416 14.6986C8.98357 14.741 8.97827 14.778 8.97827 14.8098C9.00475 15.0322 9.42309 15.0216 10.0374 14.5662C10.7417 14.0419 10.8264 14.2802 11.0806 15.1063C11.1229 15.2387 11.1653 15.3446 11.213 15.4347C11.2394 15.4876 11.2712 15.5353 11.303 15.5776C11.3824 15.6836 11.4777 15.7365 11.5784 15.7471C11.5836 15.7471 11.5889 15.7471 11.5942 15.7471H11.5995C11.6366 15.7471 11.679 15.7418 11.716 15.7259C11.8166 15.6941 11.9173 15.62 12.0338 15.5035C12.1291 15.4029 12.235 15.2652 12.3409 15.0958C12.4574 14.9104 12.5527 14.7992 12.6427 14.7357C12.6639 14.7251 12.6798 14.7092 12.701 14.7039C13.0081 14.5715 13.1988 15.1063 13.6224 15.3817C13.6912 15.4241 13.7389 15.44 13.7813 15.4347C13.813 15.4294 13.8342 15.4082 13.8501 15.3817C13.866 15.3552 13.8819 15.3182 13.8872 15.2758C13.8925 15.2493 13.8978 15.2175 13.9031 15.1858C13.919 15.0375 13.9137 14.8628 13.9454 14.741C13.9825 14.598 14.0672 14.545 14.2896 14.7515C14.5279 14.9687 14.7397 14.9634 14.8986 14.7727C14.9251 14.741 14.9463 14.7039 14.9728 14.6615C15.0575 14.508 15.121 14.2855 15.1528 13.9996C15.2428 13.1788 15.3593 14.1955 16.2437 14.5503C16.2701 14.5609 16.2966 14.5715 16.3178 14.5821C16.3231 14.5874 16.3337 14.5874 16.339 14.5874C16.3549 14.5927 16.3708 14.598 16.3866 14.6033C16.3972 14.6086 16.4025 14.6086 16.4078 14.6086C16.4184 14.6139 16.4343 14.6139 16.4449 14.6192C16.4502 14.6192 16.4608 14.6245 16.4661 14.6245C16.4767 14.6245 16.4873 14.6297 16.4978 14.6297C16.5031 14.6297 16.5137 14.6297 16.519 14.635C16.5296 14.635 16.5349 14.6403 16.5455 14.6403C16.5508 14.6403 16.5561 14.6403 16.5614 14.6403C16.5667 14.6403 16.5773 14.6403 16.5826 14.6403C16.5879 14.6403 16.5932 14.6403 16.5985 14.6403C16.6038 14.6403 16.6091 14.6403 16.6143 14.6403C16.6196 14.6403 16.6249 14.6403 16.6249 14.635C16.6302 14.635 16.6355 14.6297 16.6355 14.6297C16.6408 14.6297 16.6408 14.6245 16.6461 14.6245C16.6514 14.6245 16.6514 14.6192 16.6567 14.6192L16.662 14.6139C16.662 14.6086 16.6673 14.6086 16.6673 14.6033C16.6673 14.598 16.6726 14.598 16.6726 14.5927C16.6726 14.5874 16.6726 14.5874 16.6779 14.5821C16.6779 14.5768 16.6779 14.5768 16.6779 14.5715C16.6779 14.5662 16.6779 14.5609 16.6779 14.5609C16.6779 14.5556 16.6779 14.5556 16.6779 14.5503C16.6779 14.545 16.6779 14.5397 16.6779 14.5344C16.6832 14.5291 16.6832 14.5238 16.6832 14.5238Z"
                fill="#24420D"></path>
        </g>
        <path
            d="M8.99408 10.6312C8.8458 11.452 7.00827 13.2736 6.51579 13.5861C6.02331 13.8985 6.72232 13.8085 7.30482 13.5861C7.88732 13.3637 7.60136 13.8826 7.45309 14.1368C7.30482 14.391 8.03559 14.2586 8.7346 13.7926C9.4336 13.3266 9.09469 14.1209 8.98878 14.4492C8.88287 14.7775 9.33299 14.8358 10.032 14.3168C10.7363 13.7926 10.821 14.0309 11.0752 14.857C11.3294 15.6831 11.7689 15.7572 12.3355 14.8464C12.9021 13.9356 13.0557 14.767 13.617 15.1376C14.1678 15.4924 13.6329 13.9038 14.2843 14.5022C14.7026 14.8887 15.0627 14.5763 15.1527 13.7555C15.2427 12.9347 15.3592 13.9515 16.2436 14.3062C17.1226 14.6663 16.4395 13.8879 16.2436 13.5278C16.0477 13.1677 16.7202 13.9779 17.541 13.6496C17.8852 13.5119 15.8676 12.7812 15.1368 10.9013C14.9091 10.3135 14.046 9.9163 14.046 9.9163L12.8227 10.0063L10.3921 9.73096L8.99408 10.6312Z"
            fill="url(#paint6_linear)"></path>
        <path
            d="M17.1703 13.2419C16.6037 12.8341 15.6135 12.1033 15.1475 10.9013C14.9197 10.3135 14.0566 9.9163 14.0566 9.9163L12.8333 10.0063L10.4027 9.73096L8.99411 10.6312C8.87761 11.2825 7.69672 12.564 6.96594 13.2207C7.02419 13.3213 7.18835 13.3425 7.40017 13.2154C7.80792 12.9665 8.11506 13.2525 8.03563 13.4325C7.9562 13.6125 8.03563 13.7608 8.49104 13.5119C8.95175 13.263 9.61368 13.1201 9.61368 13.3425C9.61368 13.5649 9.13709 14.2374 9.37538 14.1527C9.61368 14.0627 10.5457 13.2789 11.0276 13.5649C11.5095 13.8508 11.2606 14.7352 11.4459 14.9205C11.6313 15.1059 12.362 13.8244 12.5897 13.8138C12.8174 13.8032 13.2252 14.6399 13.5535 14.6028C13.8818 14.5604 13.8395 13.7185 14.0619 13.6867C14.2843 13.6549 14.4008 14.2851 14.5808 14.2427C14.7609 14.2003 14.9092 13.1095 15.2481 13.0989C15.587 13.0883 15.9259 14.015 16.2013 13.9356C16.4819 13.8561 16.0212 13.4855 16.1112 13.1571C16.2013 12.8288 16.6196 13.3742 16.985 13.3425C17.0803 13.3372 17.1333 13.2948 17.1703 13.2419Z"
            fill="url(#paint7_linear)"></path>
        <path
            d="M16.106 13.6919C16.106 13.6919 15.8253 12.977 15.9789 12.6752C16.016 12.6063 16.0848 12.511 16.1642 12.4051C15.7724 12.0132 15.3911 11.5208 15.1475 10.8959C14.9198 10.3081 14.0566 9.91093 14.0566 9.91093L12.8334 10.001L10.4028 9.72559L8.99415 10.6258C8.89884 11.1395 8.15217 12.0344 7.48494 12.7175C7.40551 12.9082 7.33667 13.0406 7.33667 13.0406C7.33667 13.0406 8.21042 12.6328 8.69761 12.6699C9.18479 12.7122 8.31104 13.3371 8.31104 13.3371C8.31104 13.3371 9.91027 12.8499 10.1909 12.6328C10.1909 12.6328 10.1539 13.4324 9.8785 13.6231C9.8785 13.6231 11.3295 12.834 11.5201 13.4748C11.7107 14.1155 11.5889 14.5498 11.5889 14.5498C11.5889 14.5498 12.415 13.7713 12.5739 13.2259C12.5739 13.2259 13.0929 13.4165 13.3788 13.9831C13.3788 13.9831 13.6701 13.0776 14.1255 13.0988C14.5809 13.12 14.6127 13.9355 14.6127 13.9355C14.6127 13.9355 14.9516 13.0988 14.9622 12.7016C14.9622 12.7016 15.3223 12.6116 15.4493 12.8234C15.5764 13.0247 15.8942 13.5436 16.106 13.6919Z"
            fill="url(#paint8_linear)"></path>
        <path opacity="0.24"
            d="M15.5393 11.6532C15.391 11.4255 15.2533 11.1766 15.1474 10.9013C14.9197 10.3135 14.0566 9.9163 14.0566 9.9163L12.8333 10.0063L10.4027 9.73096L8.99409 10.6312C8.94113 10.9224 8.67636 11.3408 8.33215 11.7697C8.82993 11.6532 9.16354 11.6003 8.94643 11.8862C8.66047 12.2569 9.20061 12.2887 9.81489 12.0186C10.4292 11.7485 10.085 12.2887 10.4715 12.4211C10.8581 12.5534 11.7742 12.1086 12.0178 11.7803C12.2614 11.452 12.5897 12.6594 12.9922 12.6594C13.3946 12.6594 13.4688 12.151 13.3946 11.8968C13.3205 11.6426 14.0089 12.2675 14.4272 12.2675C14.8456 12.2675 14.9515 11.9074 14.8138 11.5791C14.7185 11.3408 15.1368 11.6109 15.5393 11.6532Z"
            fill="#366E0D"></path>
        <path
            d="M9.96318 8.28537C9.70899 9.09028 8.53869 10.5942 8.23156 10.896C7.92442 11.1979 9.05236 11.0443 9.43893 10.7001C9.8255 10.3559 10.0373 10.8219 9.61897 11.2826C9.20063 11.7433 10.4557 11.2826 10.964 10.8643C11.4724 10.4459 11.0488 11.2032 10.9958 11.6427C10.9375 12.1193 11.7001 11.3885 11.9384 11.0178C12.1767 10.6472 12.595 11.8016 12.8651 11.8016C13.1352 11.8016 13.0293 11.2879 12.8333 10.9437C12.6374 10.5995 13.5376 10.9755 14.0407 11.5686C14.5491 12.167 14.7132 11.1979 14.369 10.8537C14.0248 10.5095 14.4008 10.4036 14.7291 10.896C15.0574 11.3885 16.1324 11.1502 15.6399 10.7742C15.1474 10.4036 14.0884 8.8308 13.9242 8.28007C13.76 7.72934 12.9975 7.71875 12.9975 7.71875L11.7848 7.76641L9.96318 8.28537Z"
            fill="url(#paint9_linear)"></path>
        <path
            d="M12.9975 7.71875L11.7848 7.76641L9.96318 8.29066C9.78843 8.8361 9.19533 9.70455 8.73463 10.3029C8.66578 10.4989 8.71874 10.5995 9.08413 10.4406C9.71958 10.16 10.0479 10.1229 9.97906 10.5254C9.91022 10.9278 9.97906 11.2297 10.4345 10.8643C10.8899 10.4989 11.3294 10.25 11.4194 10.43C11.5095 10.6101 11.3082 10.949 11.2817 11.1343C11.25 11.325 11.7689 10.7054 11.9649 10.5677C12.1661 10.43 12.4626 10.9331 12.5527 11.0655C12.6427 11.1979 12.7115 10.7954 12.6321 10.4777C12.5527 10.16 13.2093 10.6366 13.4211 10.7584C13.6329 10.8801 14.459 11.5474 14.2207 11.039C13.9824 10.5306 14.0989 10.1123 14.3584 10.3135C14.6179 10.5148 15.2851 11.0814 15.1633 10.7107C15.121 10.573 15.1051 10.3983 15.0998 10.2288C14.602 9.60394 14.0248 8.68782 13.9083 8.29066C13.7547 7.73464 12.9975 7.71875 12.9975 7.71875Z"
            fill="url(#paint10_linear)"></path>
        <path
            d="M12.9975 7.71875L11.7848 7.76641L9.96315 8.29066C9.85724 8.63487 9.58187 9.10087 9.28003 9.54569C9.42301 9.74162 9.34887 10.1547 9.34887 10.1547C9.34887 10.1547 10.0691 9.56157 10.4239 9.60394C10.7786 9.6463 10.1856 10.663 10.1856 10.663C10.1856 10.663 11.3664 10.0488 11.5306 9.45567C11.5306 9.45567 11.8219 10.1706 11.6312 10.5254C11.6312 10.5254 12.0972 8.87316 13.6965 10.6683C13.6965 10.6683 13.6223 9.97992 13.7653 9.68337C13.9083 9.38682 14.745 10.3241 14.745 10.3241C14.745 10.3241 14.4855 9.77339 14.4749 9.32857C14.2101 8.91553 13.993 8.51837 13.9242 8.29066C13.7547 7.73464 12.9975 7.71875 12.9975 7.71875Z"
            fill="url(#paint11_linear)"></path>
        <path opacity="0.24"
            d="M12.9975 7.71875L11.7848 7.76641L9.96316 8.29066C9.88902 8.53425 9.72486 8.84139 9.52893 9.15912C9.61895 9.22796 9.75664 9.20148 9.89961 9.14323C10.1538 9.03732 9.85725 9.55628 10.6039 9.20148C11.3506 8.84669 11.2447 9.33917 11.7689 9.38153C12.2932 9.42389 12.6056 9.25973 12.7539 9.03732C12.9021 8.81491 13.3046 9.16971 13.6647 9.16971C14.0248 9.16971 14.0354 9.00555 14.0354 8.85728C14.0354 8.81491 14.0883 8.81491 14.1678 8.8308C14.046 8.61369 13.9559 8.42305 13.9189 8.29066C13.7547 7.73464 12.9975 7.71875 12.9975 7.71875Z"
            fill="#366E0D"></path>
        <path opacity="0.75"
            d="M13.9719 8.41809C13.7707 8.32277 13.5642 8.06858 13.5059 8.0527C13.2358 7.84617 12.8387 8.14272 12.7751 8.25922C12.6851 8.42338 11.3877 7.98915 11.1547 8.30159C11.0488 8.44456 10.8793 8.2804 10.7046 8.07918L9.96853 8.29099C9.93146 8.41279 9.87321 8.55047 9.79907 8.69875C9.90498 8.68816 10.0268 8.65109 10.1221 8.57695C10.4186 8.33865 10.3445 8.56106 10.3445 8.88938C10.3445 9.2177 10.8793 8.79936 11.1229 8.48693C11.3612 8.17449 11.4724 9.24948 11.9755 9.24948C12.4786 9.24948 12.6745 8.60872 12.7645 8.44456C12.8546 8.2804 12.9128 8.84702 13.4053 8.9847C13.7124 9.06943 13.7972 8.92116 13.7601 8.71993C13.7495 8.57695 13.7124 8.46575 13.6542 8.38102C13.7813 8.48163 13.9295 8.58225 14.0778 8.65638C14.0407 8.58225 13.9931 8.47104 13.9719 8.41809Z"
            fill="#24420D"></path>
        <path
            d="M10.7999 6.12507C10.6781 6.70757 9.88907 8.0791 9.59252 8.3068C9.29598 8.53451 9.81494 8.6669 10.1168 8.4286C10.4186 8.1903 10.3392 8.41271 10.3392 8.74103C10.3392 9.06935 10.874 8.65101 11.1176 8.33858C11.3559 8.02614 11.4671 9.10112 11.9702 9.10112C12.4733 9.10112 12.6692 8.46037 12.7592 8.29621C12.8492 8.13205 12.9075 8.69867 13.4 8.83635C13.8925 8.97403 13.8183 8.50803 13.58 8.1956C13.3417 7.88317 13.9454 8.60865 14.4697 8.63512C15.0098 8.6616 13.9401 8.1956 13.7601 7.75078C13.58 7.30596 13.4 6.64402 13.1352 6.05093C12.8704 5.45784 12.0973 5.24072 12.0973 5.24072L11.5624 5.47902L10.7999 6.12507Z"
            fill="url(#paint12_linear)"></path>
        <path
            d="M13.4264 8.2009C13.2834 7.92023 13.4317 7.76137 13.5694 7.93083C13.7071 8.10028 13.9771 8.30681 13.9083 8.13205C13.8394 7.95201 13.6382 7.83551 13.617 7.69253C13.6064 7.62369 13.6541 7.61839 13.7176 7.64487C13.5482 7.20005 13.3787 6.59637 13.1245 6.03504C12.8598 5.43666 12.0972 5.24072 12.0972 5.24072L11.5624 5.47902L10.7998 6.12507C10.7363 6.43221 10.4821 6.96175 10.2173 7.42776C10.2491 7.56014 10.2491 7.69253 10.1697 7.81962C10.0214 8.05792 10.3974 7.89905 10.5298 7.80903C10.6569 7.71901 10.5986 8.04733 10.5615 8.20619C10.5192 8.36506 10.8528 8.1956 11.017 7.9573C11.1864 7.71901 11.5147 7.96789 11.6365 8.28562C11.753 8.60335 11.9807 8.70926 11.9542 8.35976C11.9331 8.01026 12.2879 8.02614 12.219 8.35976C12.1502 8.69337 12.5791 8.30681 12.6956 8.02614C12.8174 7.74548 13.0345 7.98378 13.1722 8.24326C13.3152 8.50803 13.5694 8.47626 13.4264 8.2009Z"
            fill="url(#paint13_linear)"></path>
        <path
            d="M13.4953 7.00412C13.3894 6.69168 13.2729 6.35277 13.1246 6.03504C12.8598 5.43666 12.0973 5.24072 12.0973 5.24072L11.5624 5.47902L10.7999 6.12507C10.7522 6.35807 10.5933 6.72346 10.4027 7.08884C10.9323 6.77112 10.9217 7.65546 10.9217 7.65546C10.9217 7.65546 11.5254 7.2583 11.8484 7.39598C12.1714 7.53366 12.2614 8.10558 12.2614 8.10558C12.2614 8.10558 12.8174 7.43835 13.0769 7.66605C13.0769 7.66076 13.5376 7.32185 13.4953 7.00412Z"
            fill="url(#paint14_linear)"></path>
        <path opacity="0.24"
            d="M13.4159 6.76566C13.3311 6.52207 13.2358 6.27318 13.1299 6.02959C13.0505 5.85484 12.934 5.71716 12.8016 5.60595C12.6109 5.57418 12.3462 5.53711 12.3091 5.53711C12.2773 5.53711 11.8272 5.56888 11.4248 5.59536L10.7999 6.12491C10.7681 6.28907 10.6781 6.51148 10.5669 6.75507C10.7363 6.7233 10.8952 6.68093 11.0117 6.64386C11.3559 6.53795 11.4618 6.85039 11.7743 6.92982C12.0867 7.00925 12.3832 6.85568 12.5474 6.63327C12.7116 6.41086 12.7592 6.75507 13.2676 6.78155C13.3205 6.78155 13.3682 6.77625 13.4159 6.76566Z"
            fill="#366E0D"></path>
        <path opacity="0.75"
            d="M13.1299 6.03496C13.0504 5.86021 12.9339 5.72253 12.8015 5.61132C12.6109 5.57955 12.3461 5.54248 12.3091 5.54248C12.3038 5.54248 12.2826 5.54248 12.2561 5.54778C12.2032 5.88669 12.1502 6.11439 11.8854 6.11439C11.7001 6.11439 11.5465 5.81785 11.3188 5.69605L10.8051 6.13028C10.784 6.23089 10.7416 6.36328 10.6833 6.50626C10.7946 6.50096 10.9269 6.46389 11.0752 6.36858C11.5677 6.05614 11.5836 6.73926 11.8642 6.73926C12.1502 6.73926 12.3885 6.48508 12.4467 6.11439C12.505 5.749 12.8916 6.47978 13.3258 6.51685C13.2622 6.34739 13.1987 6.18853 13.1299 6.03496Z"
            fill="#24420D"></path>
        <path
            d="M11.9225 4.67432C11.3665 4.67432 10.6198 5.87109 10.4239 6.06173C10.2279 6.25766 10.588 6.55421 11.0805 6.24178C11.573 5.92934 11.5889 6.61246 11.8695 6.61246C12.1555 6.61246 12.3938 6.35828 12.452 5.9876C12.5103 5.61691 12.9127 6.39005 13.3629 6.39005C13.813 6.39005 13.6594 6.13587 13.2411 5.77578C12.828 5.42098 12.5844 4.67432 11.9225 4.67432Z"
            fill="url(#paint15_linear)"></path>
        <path
            d="M10.8264 5.55337C11.0171 5.63809 11.3189 5.6328 11.4672 5.53218C11.4672 5.53218 11.8379 5.53218 11.8855 5.93993C11.8855 5.93993 12.5474 5.46334 12.6745 5.21975C12.7434 5.08736 11.8379 4.82259 11.9014 4.67432C11.5519 4.6955 11.1388 5.1615 10.8264 5.55337Z"
            fill="url(#paint16_linear)"></path>
        <path opacity="0.5"
            d="M13.2463 5.78083C13.331 5.84967 13.76 6.24683 13.3152 6.24683C12.8703 6.24683 12.4732 5.51076 12.4096 5.88674C12.3514 6.25742 12.1555 6.44806 11.8748 6.44806C11.5888 6.44806 11.6153 5.84437 11.1069 6.15151C10.8263 6.32097 10.4185 6.34215 10.4291 6.06678C10.2332 6.26272 10.5933 6.55926 11.0858 6.24683C11.5782 5.9344 11.5941 6.61751 11.8748 6.61751C12.1607 6.61751 12.399 6.36333 12.4573 5.99265C12.5155 5.62196 12.918 6.3951 13.3681 6.3951C13.8182 6.3951 13.6647 6.13562 13.2463 5.78083Z"
            fill="#407817"></path>
        <g opacity="0.5">
            <path opacity="0.5"
                d="M14.4696 8.42319C14.4643 8.42319 14.4696 8.41789 14.4696 8.42319C14.3319 8.59264 13.4952 8.02073 13.527 8.11075C13.7653 8.33846 14.1783 8.59794 14.4378 8.61912C14.7026 8.6403 14.6338 8.53969 14.4696 8.42319Z"
                fill="#407817"></path>
            <path opacity="0.5"
                d="M13.4106 8.64567C12.9234 8.51328 12.8651 7.94137 12.7751 8.10553C12.6851 8.26969 12.4944 8.91044 11.9967 8.91044C11.4989 8.91044 11.3877 7.83546 11.1547 8.14789C10.9217 8.46032 10.3868 8.87867 10.3868 8.55035C10.3868 8.22203 10.461 7.99962 10.1644 8.23791C9.96849 8.39678 9.67195 8.39148 9.58722 8.30146C9.29597 8.52387 9.81492 8.65626 10.1115 8.41796C10.408 8.17966 10.3339 8.40207 10.3339 8.73039C10.3339 9.05871 10.8687 8.64037 11.1123 8.32794C11.3506 8.0155 11.4618 9.09049 11.9649 9.09049C12.468 9.09049 12.6639 8.44973 12.7539 8.28557C12.8439 8.12141 12.9022 8.68803 13.3947 8.82571C13.7018 8.91044 13.7865 8.76217 13.7495 8.56094C13.7177 8.65626 13.6118 8.70392 13.4106 8.64567Z"
                fill="#407817"></path>
        </g>
        <path
            d="M11.1971 10.7587C11.1017 10.6369 10.8687 10.8063 10.7364 10.907C10.3445 11.2035 9.50252 11.5371 9.58724 11.3306C9.28011 11.7277 10.4716 11.2776 10.9641 10.8699C11.1017 10.7587 11.1706 10.7322 11.1971 10.7587Z"
            fill="#407817"></path>
        <path
            d="M9.84138 10.7323C9.84138 10.7323 9.76724 10.3405 9.40715 10.6264C9.10001 10.87 8.11506 11.156 8.23685 10.9018C8.23685 10.9018 8.23685 10.9018 8.23156 10.9071C7.92442 11.2142 9.05236 11.0554 9.43892 10.7111C9.65074 10.5205 9.80961 10.5735 9.84138 10.7323Z"
            fill="#407817"></path>
        <path
            d="M12.8598 11.6537C12.5898 11.6537 12.1714 10.494 11.9331 10.8699C11.716 11.2035 11.0806 11.8284 11.0011 11.606C11.0011 11.6219 10.9958 11.6325 10.9958 11.6484C10.9376 12.1673 11.7001 11.3942 11.9384 11.0235C12.1767 10.6528 12.5951 11.8284 12.8598 11.8284C12.9975 11.8284 13.0399 11.6695 13.0187 11.4948C13.0028 11.5901 12.9552 11.6537 12.8598 11.6537Z"
            fill="#407817"></path>
        <path
            d="M14.729 10.7533C14.5331 10.5203 14.3213 10.4727 14.2683 10.5733C14.3424 10.5309 14.5437 10.6209 14.729 10.9016C15.0626 11.3994 15.9205 11.1981 15.7405 10.891C15.7987 11.2087 15.0097 11.0816 14.729 10.7533Z"
            fill="#407817"></path>
        <path
            d="M14.0407 11.4263C13.2146 10.5155 12.8386 10.8173 12.8439 10.8226C13.0028 10.775 13.6382 11.1298 14.0354 11.6011C14.3849 12.0141 14.5755 11.654 14.5438 11.2939C14.5226 11.5799 14.3531 11.7705 14.0407 11.4263Z"
            fill="#407817"></path>
        <g opacity="0.5">
            <path opacity="0.5"
                d="M16.2488 14.1475C15.3698 13.7875 15.248 12.776 15.158 13.5968C15.068 14.4176 14.7132 14.73 14.2895 14.3435C13.6382 13.7451 14.173 15.339 13.6223 14.9789C13.0557 14.6135 12.9074 13.7769 12.3408 14.6877C11.7742 15.5985 11.3346 15.5191 11.0805 14.6983C10.8263 13.8775 10.7363 13.6392 10.0373 14.1581C9.33825 14.6771 8.93579 14.6294 9.0417 14.3011C9.02052 14.3541 9.00463 14.407 8.99404 14.4494C8.88813 14.7777 9.33825 14.836 10.0373 14.317C10.7363 13.798 10.8263 14.031 11.0805 14.8571C11.3346 15.6832 11.7742 15.7574 12.3408 14.8465C12.9074 13.9357 13.061 14.7671 13.6223 15.1378C14.173 15.4926 13.6382 13.904 14.2895 14.5023C14.7079 14.8889 15.068 14.5765 15.158 13.7557C15.248 12.9349 15.3645 13.9516 16.2488 14.3064C16.6619 14.4759 16.7307 14.3911 16.6672 14.2217C16.6354 14.2693 16.5136 14.2587 16.2488 14.1475Z"
                fill="#407817"></path>
            <path opacity="0.5"
                d="M9.16887 13.8454C9.20594 13.6018 9.1424 13.4323 8.73464 13.6865C8.02505 14.1366 7.3843 14.2531 7.53787 13.999C7.69143 13.7448 7.9615 13.2629 7.379 13.4853C7.0242 13.623 6.59527 13.6865 6.43111 13.6442C6.12927 13.8825 6.77002 13.7871 7.31016 13.5806C7.89266 13.3582 7.60671 13.8772 7.45843 14.1314C7.31016 14.3855 8.04094 14.2531 8.73994 13.7871C9.10003 13.5594 9.18476 13.6548 9.16887 13.8454Z"
                fill="#407817"></path>
            <path opacity="0.5"
                d="M17.5146 13.5014C16.7096 13.798 16.0212 13.0884 16.2119 13.4432C16.2225 13.3532 16.8261 13.9357 17.5463 13.6444C17.6152 13.6232 17.594 13.5756 17.5146 13.5014Z"
                fill="#407817"></path>
        </g>
        <path
            d="M15.7035 17.1765C15.82 17.5154 15.7565 17.9973 15.2693 18.045C14.6921 18.1032 14.0142 17.0812 13.7865 17.1871C13.5588 17.2983 13.7971 18.1827 13.1617 18.3044C12.5262 18.4262 12.4097 17.4254 12.2932 17.5366C12.1767 17.6531 11.5254 18.5639 10.5616 18.5533C9.82022 18.5427 11.1229 17.2718 9.97909 17.3883C9.66136 17.4201 7.96151 18.2886 8.04094 17.8914C8.12037 17.4942 8.29512 16.8958 7.94562 16.9541C7.59612 17.0124 7.3843 17.5684 6.73825 17.4784C6.09221 17.3883 6.51584 16.6152 6.18752 16.7635C5.981 16.8588 5.52559 16.8694 5.2767 16.8111C5.22375 16.8641 5.18668 16.9064 5.1602 16.9223C4.87954 17.1236 5.65268 17.2189 5.981 17.0706C6.30932 16.9223 6.0975 17.7219 6.74884 17.812C7.40019 17.902 7.60142 17.1447 7.95092 17.0865C8.30042 17.0282 8.03565 17.8596 7.95621 18.2568C7.87678 18.6539 9.70902 17.4942 10.0267 17.4625C11.1706 17.346 9.52897 18.8817 10.498 18.8817C11.4671 18.8817 12.182 17.9338 12.2985 17.8226C12.415 17.7061 12.5262 18.7016 13.167 18.5904C13.9083 18.458 13.5641 17.5843 13.7918 17.4731C14.0195 17.3619 14.5756 18.4051 15.2746 18.3309C15.8518 18.2674 15.9206 17.5048 15.7141 17.1977C15.7035 17.1818 15.7035 17.1818 15.7035 17.1765Z"
            fill="#407817"></path>
        <path
            d="M17.3186 17.4836C16.789 17.5259 15.4122 16.6892 15.6187 17.0017C15.6452 17.0387 15.6664 17.0864 15.6876 17.1341C15.7087 17.0123 16.8631 17.7695 17.3503 17.7324C17.6469 17.7113 17.6628 17.3565 17.6363 17.0546C17.631 17.277 17.5622 17.4677 17.3186 17.4836Z"
            fill="#407817"></path>
        <path
            d="M18.9497 16.4935C18.6849 16.5836 17.5623 16.1229 17.5623 16.3506C17.5623 16.377 17.5676 16.4088 17.5676 16.4459C17.6788 16.2658 19.1191 17.129 19.0026 16.6683C18.9867 16.61 18.9709 16.5518 18.9497 16.4935Z"
            fill="#407817"></path>
        <path opacity="0.24"
            d="M19.0026 16.6686C18.7431 15.6096 17.3822 14.291 16.4714 13.5549C16.4873 13.5655 16.5084 13.5708 16.5243 13.5814C16.5296 13.5814 16.5296 13.5867 16.5349 13.5867C16.5614 13.5973 16.5879 13.6079 16.6143 13.6185C16.6408 13.629 16.6726 13.6396 16.6991 13.6502C16.7044 13.6502 16.7097 13.6555 16.715 13.6555C16.7414 13.6661 16.7732 13.6714 16.805 13.682C16.8103 13.682 16.8156 13.6873 16.8209 13.6873C16.8526 13.6926 16.8844 13.7032 16.9162 13.7085C16.9215 13.7085 16.9268 13.7085 16.9321 13.7085C16.9691 13.7138 17.0009 13.7191 17.038 13.7244C17.0751 13.7297 17.1121 13.7297 17.1492 13.7297C17.1545 13.7297 17.1598 13.7297 17.1651 13.7297C17.2021 13.7297 17.2392 13.7244 17.2763 13.7191C17.2816 13.7191 17.2922 13.7191 17.2975 13.7138C17.3345 13.7085 17.3716 13.7032 17.4087 13.6926C17.414 13.6926 17.4193 13.6873 17.4246 13.6873C17.4669 13.6767 17.504 13.6608 17.5464 13.6449C17.5569 13.6396 17.5622 13.6343 17.5675 13.629L17.5728 13.6237C17.5781 13.6185 17.5781 13.6185 17.5834 13.6132V13.6079C17.5834 13.6026 17.5834 13.5973 17.5834 13.592C17.5834 13.5867 17.5781 13.5761 17.5728 13.5708C17.5728 13.5655 17.5675 13.5655 17.5675 13.5602C17.5622 13.5549 17.5569 13.5496 17.5516 13.5443C17.5464 13.539 17.5464 13.539 17.5411 13.5337C17.5358 13.5284 17.5252 13.5178 17.5199 13.5125C17.218 13.2266 15.9312 12.5435 15.2746 11.2037C15.5235 11.2196 15.7406 11.1243 15.7618 10.9919C15.7724 10.9336 15.7353 10.8595 15.6347 10.7854C15.1846 10.4412 14.2526 9.09611 13.9772 8.45007C14.1414 8.54538 14.3055 8.61423 14.4379 8.62482C14.7027 8.646 14.6338 8.54539 14.4697 8.42888C14.2579 8.26472 13.8607 7.99995 13.7601 7.74047C13.6171 7.38038 13.4688 6.87731 13.2782 6.38483C13.31 6.39013 13.3417 6.39542 13.3735 6.39542C13.5694 6.39542 13.6489 6.34776 13.6436 6.26303C13.6383 6.15183 13.4847 5.98767 13.2517 5.78644C12.8334 5.42635 12.5898 4.67969 11.9278 4.67969C11.6472 4.67969 11.3189 4.98153 11.0382 5.30455C11.1123 5.42105 11.4248 5.42105 11.8643 5.08744C11.8643 5.08744 12.2773 5.23571 12.2668 5.4846C12.2562 5.73349 12.1767 6.35306 11.8802 6.44838C11.5836 6.5384 11.9596 6.61254 11.9596 6.61254C11.9596 6.61254 11.9543 7.2374 12.2509 7.67163C12.5474 8.11116 12.0073 8.91607 12.0073 8.91607C12.0073 8.91607 11.9596 9.01668 12.0391 9.09611C12.0391 9.09611 11.7319 10.2823 12.4574 11.2196C12.4574 11.2196 11.9596 11.8127 12.4203 12.9089C12.8757 14.005 13.1935 13.7985 13.4529 14.8417L13.257 14.7993C13.257 14.7993 12.6798 15.2865 13.1564 16.3827C13.633 17.4789 13.543 16.6845 14.6497 17.8125C14.8404 18.0084 15.0257 18.1779 15.2005 18.3261C15.2269 18.3261 15.2534 18.3261 15.2799 18.3261C15.2799 18.3261 15.2799 18.3261 15.2852 18.3261C15.7141 18.2785 15.8624 17.8389 15.82 17.4894C15.8094 17.4047 15.7883 17.3253 15.7565 17.2617V17.2564C15.7565 17.2564 15.7565 17.2511 15.7512 17.2511C15.7406 17.23 15.73 17.2088 15.7194 17.1929C15.7194 17.1876 15.7141 17.1876 15.7141 17.1823C15.7035 17.1611 15.6982 17.1505 15.6982 17.1399C15.7194 17.0181 16.8738 17.7754 17.361 17.7383C17.6523 17.7171 17.6734 17.3729 17.6523 17.0764C17.6523 17.0711 17.6523 17.0658 17.6523 17.0605C17.6311 16.8275 17.5781 16.5945 17.5781 16.478C17.5781 16.4674 17.5834 16.4568 17.5834 16.4515C17.6734 16.2662 19.1138 17.1294 19.0026 16.6686Z"
            fill="#366E0D"></path>
        <g opacity="0.75">
            <path opacity="0.75"
                d="M11.2024 10.88C11.213 10.8218 11.213 10.7794 11.1971 10.7582C11.1918 10.7529 11.1918 10.7529 11.1865 10.7529C11.1812 10.7529 11.1759 10.7529 11.1706 10.7529C11.1653 10.7529 11.16 10.7529 11.1547 10.7582H11.1494C11.1441 10.7582 11.1388 10.7635 11.1283 10.7635C11.1283 10.7635 11.123 10.7635 11.123 10.7688C11.1177 10.7741 11.1071 10.7741 11.1018 10.7794C11.0965 10.7794 11.0965 10.7847 11.0912 10.7847C11.0859 10.79 11.0753 10.7953 11.0647 10.8006C11.0594 10.8006 11.0594 10.8059 11.0541 10.8059C11.0435 10.8112 11.0329 10.8218 11.0223 10.8271C11.017 10.8324 11.017 10.8324 11.0117 10.8377C10.9959 10.8482 10.98 10.8588 10.9641 10.8747C10.9482 10.8853 10.9323 10.9012 10.9164 10.9118C10.9111 10.9171 10.9058 10.9171 10.9005 10.9224C10.89 10.933 10.8741 10.9436 10.8635 10.9489C10.8582 10.9542 10.8529 10.9595 10.8423 10.9647C10.8317 10.9753 10.8158 10.9806 10.8052 10.9912C10.7999 10.9965 10.7893 11.0018 10.784 11.0071C10.7735 11.0124 10.7576 11.023 10.747 11.0283C10.7364 11.0336 10.7311 11.0389 10.7205 11.0442C10.7099 11.0495 10.694 11.0601 10.6834 11.0654C10.6728 11.0707 10.6675 11.076 10.657 11.0812C10.6464 11.0865 10.6305 11.0971 10.6199 11.1024C10.6093 11.1077 10.5987 11.113 10.5934 11.1183C10.5828 11.1236 10.5669 11.1342 10.5563 11.1395C10.5457 11.1448 10.5352 11.1501 10.5246 11.1554C10.514 11.1607 10.5034 11.166 10.4875 11.1766C10.4769 11.1819 10.4663 11.1872 10.4557 11.1925C10.4451 11.1977 10.4292 11.203 10.4187 11.2136C10.4081 11.2189 10.3975 11.2242 10.3869 11.2295C10.3763 11.2348 10.3604 11.2401 10.3498 11.2454C10.3392 11.2507 10.3286 11.256 10.318 11.2613C10.3075 11.2666 10.2969 11.2719 10.281 11.2772C10.2704 11.2825 10.2598 11.2878 10.2492 11.2931C10.2386 11.2984 10.228 11.3037 10.2121 11.309C10.2015 11.3142 10.191 11.3195 10.1804 11.3248C10.1698 11.3301 10.1592 11.3354 10.1486 11.3407C10.138 11.346 10.1274 11.3513 10.1168 11.3513C10.1062 11.3566 10.0956 11.3619 10.085 11.3672C10.0745 11.3725 10.0639 11.3778 10.0533 11.3778C10.0427 11.3831 10.0321 11.3884 10.0215 11.3884C10.0109 11.3937 10.0003 11.3937 9.98972 11.399C9.97913 11.4043 9.96854 11.4043 9.95795 11.4096C9.94736 11.4149 9.93677 11.4149 9.92618 11.4202C9.91559 11.4255 9.905 11.4255 9.89441 11.4308C9.88381 11.436 9.87322 11.436 9.86793 11.4413C9.85734 11.4466 9.85204 11.4466 9.84145 11.4519C9.83086 11.4519 9.82556 11.4572 9.81497 11.4572C9.80438 11.4572 9.79909 11.4625 9.7885 11.4625C9.7779 11.4625 9.77261 11.4678 9.76202 11.4678C9.75143 11.4678 9.74613 11.4731 9.74084 11.4731C9.73025 11.4731 9.72495 11.4784 9.71965 11.4784C9.71436 11.4784 9.70377 11.4784 9.69847 11.4837C9.69318 11.4837 9.68259 11.4837 9.67729 11.489C9.672 11.489 9.6667 11.489 9.65611 11.489C9.65081 11.489 9.64552 11.489 9.63493 11.489C9.62963 11.489 9.62434 11.489 9.61904 11.489C9.61374 11.489 9.60845 11.489 9.60315 11.489C9.59786 11.489 9.59256 11.489 9.59256 11.489C9.58727 11.489 9.58197 11.489 9.57668 11.489C9.57138 11.489 9.57138 11.489 9.56609 11.4837H9.56079C9.34368 11.8173 10.4822 11.3884 10.9588 10.9912C11.1124 10.8588 11.1812 10.8377 11.2024 10.88Z"
                fill="#24420D"></path>
            <path opacity="0.75"
                d="M9.83623 10.7107C9.83623 10.7054 9.83093 10.7001 9.83093 10.6948C9.83623 10.7001 9.83623 10.7054 9.83623 10.7107Z"
                fill="#24420D"></path>
            <path opacity="0.75"
                d="M14.5491 11.4258C14.5491 11.447 14.5438 11.4628 14.5438 11.484C14.5438 11.4893 14.5438 11.4946 14.5385 11.4999C14.5385 11.5105 14.5332 11.5211 14.5332 11.5317C14.4802 11.7753 14.3055 11.913 14.0407 11.5952C13.6435 11.1239 13.0081 10.7691 12.8492 10.8168C12.8069 10.8274 12.7963 10.8645 12.8333 10.9333C12.8386 10.928 12.8439 10.928 12.8492 10.9227C13.0081 10.875 13.6435 11.2298 14.0407 11.7011C14.3108 12.0189 14.4802 11.8812 14.5332 11.6376C14.5332 11.627 14.5385 11.6164 14.5385 11.6058C14.5385 11.6005 14.5385 11.5952 14.5438 11.5899C14.5491 11.5688 14.5491 11.5529 14.5491 11.5317C14.5491 11.5264 14.5491 11.5264 14.5491 11.5211C14.5491 11.5052 14.5491 11.484 14.5491 11.4681C14.5491 11.4628 14.5491 11.4628 14.5491 11.4575C14.5491 11.4523 14.5491 11.4417 14.5491 11.4258Z"
                fill="#24420D"></path>
            <path opacity="0.75"
                d="M13.0135 11.6533C12.9976 11.7539 12.9499 11.828 12.8546 11.828C12.5845 11.828 12.1715 10.6471 11.9332 11.0231C11.7161 11.3673 11.0541 12.0452 10.9959 11.7486C10.9959 11.7539 10.9959 11.7539 10.9959 11.7592C10.9959 11.7751 10.9906 11.791 10.9906 11.8016C10.98 12.2305 11.7002 11.4944 11.9332 11.129C12.1715 10.7583 12.5898 11.9339 12.8546 11.9339C12.9446 11.9339 12.9976 11.8598 13.0135 11.7592C13.0188 11.7221 13.0188 11.6745 13.0188 11.6268C13.0188 11.6374 13.0188 11.648 13.0135 11.6533Z"
                fill="#24420D"></path>
        </g>
        <path
            d="M9.82559 10.6794C9.815 10.6635 9.8097 10.6476 9.79911 10.637L9.79381 10.6317C9.78322 10.6211 9.77263 10.6158 9.76204 10.6052C9.75675 10.6052 9.75675 10.5999 9.75145 10.5999C9.74086 10.5947 9.73027 10.5894 9.71438 10.5894C9.70909 10.5894 9.70379 10.5894 9.6985 10.5894C9.6879 10.5894 9.67202 10.5894 9.66143 10.5894C9.65613 10.5894 9.65084 10.5894 9.64554 10.5894C9.63495 10.5894 9.61906 10.5947 9.60318 10.5999C9.59788 10.5999 9.58729 10.6052 9.58199 10.6052C9.56611 10.6105 9.55022 10.6211 9.53434 10.6317C9.52904 10.637 9.51845 10.637 9.51315 10.6423C9.49197 10.6582 9.46549 10.6741 9.43902 10.7006C9.30663 10.8171 9.07892 10.9177 8.86181 10.9812C8.84063 11.0236 8.81945 11.0659 8.79297 11.1083C9.03656 11.0448 9.29604 10.9442 9.44431 10.8118C9.47079 10.7906 9.49197 10.7694 9.51845 10.7535C9.52374 10.7482 9.53434 10.7429 9.53963 10.7429C9.55552 10.7323 9.5714 10.7217 9.58729 10.7164C9.59259 10.7112 9.60318 10.7112 9.60847 10.7112C9.62436 10.7059 9.63495 10.7006 9.65084 10.7006C9.65613 10.7006 9.66143 10.7006 9.66672 10.7006C9.67731 10.7006 9.6932 10.7006 9.70379 10.7006C9.70909 10.7006 9.71438 10.7006 9.71968 10.7006C9.73027 10.7006 9.74615 10.7059 9.75675 10.7112C9.76204 10.7112 9.76204 10.7164 9.76734 10.7164C9.77793 10.7217 9.78852 10.7323 9.79911 10.7429L9.8044 10.7482C9.815 10.7588 9.82559 10.7747 9.83088 10.7853C9.83618 10.8012 9.84677 10.8171 9.84677 10.8382C9.84677 10.8435 9.84677 10.8488 9.84677 10.8594C9.85206 10.8118 9.85206 10.7694 9.84677 10.7323C9.83618 10.7112 9.83088 10.6953 9.82559 10.6794Z"
            fill="#24420D"></path>
        <path opacity="0.75"
            d="M15.2799 11.1979C15.0998 11.1874 14.9092 11.1185 14.7768 10.9596C14.7609 10.9385 14.745 10.9226 14.7291 10.8961C14.708 10.8643 14.6868 10.8326 14.6603 10.8061C14.655 10.7955 14.6444 10.7902 14.6391 10.7796C14.6232 10.7637 14.6074 10.7425 14.5968 10.7319C14.5862 10.7213 14.5809 10.7161 14.5703 10.7055C14.5544 10.6949 14.5438 10.679 14.5279 10.6684C14.5173 10.6631 14.512 10.6525 14.5014 10.6472C14.4909 10.6366 14.475 10.626 14.4644 10.6207C14.4591 10.6154 14.4485 10.6101 14.4432 10.6048C14.4326 10.5996 14.4167 10.589 14.4061 10.5837C14.4008 10.5784 14.3955 10.5784 14.3902 10.5731C14.3744 10.5678 14.3638 10.5625 14.3532 10.5625C14.3479 10.5625 14.3479 10.5625 14.3426 10.5572C14.3108 10.5519 14.2843 10.5519 14.2684 10.5625C14.2367 10.5784 14.2261 10.6207 14.2526 10.6843C14.2579 10.679 14.2631 10.6737 14.2684 10.6737C14.2843 10.6631 14.3108 10.6631 14.3426 10.6684C14.3479 10.6684 14.3479 10.6684 14.3532 10.6737C14.3638 10.679 14.3796 10.679 14.3902 10.6843C14.3955 10.6843 14.4008 10.6896 14.4061 10.6949C14.4167 10.7002 14.4326 10.7055 14.4432 10.7161C14.4485 10.7213 14.4591 10.7266 14.4644 10.7319C14.475 10.7425 14.4909 10.7478 14.5014 10.7584C14.512 10.7637 14.5173 10.769 14.5279 10.7796C14.5385 10.7902 14.5544 10.8008 14.5703 10.8167C14.5809 10.8273 14.5862 10.8326 14.5968 10.8431C14.6126 10.859 14.6285 10.8749 14.6391 10.8908C14.6444 10.9014 14.655 10.9067 14.6603 10.9173C14.6815 10.9438 14.7027 10.9755 14.7291 11.0073C14.745 11.0285 14.7609 11.0497 14.7768 11.0709C14.9251 11.2403 15.1422 11.3091 15.3328 11.3091C15.3117 11.2721 15.2958 11.235 15.2799 11.1979Z"
            fill="#24420D"></path>
        <path opacity="0.75"
            d="M16.4713 13.5543C16.4661 13.5543 16.4608 13.549 16.4608 13.549C16.4555 13.549 16.4502 13.5437 16.4502 13.5437C16.429 13.5332 16.4078 13.5226 16.3919 13.512C16.3866 13.5067 16.3813 13.5067 16.376 13.5014C16.3654 13.4961 16.3496 13.4908 16.339 13.4802C16.3231 13.4696 16.3019 13.459 16.2913 13.4537C16.2913 13.4537 16.286 13.4537 16.286 13.4484C16.2754 13.4431 16.2648 13.4378 16.2542 13.4325H16.2489C16.2383 13.4272 16.233 13.4272 16.2278 13.4272C16.2225 13.4272 16.2225 13.4325 16.2172 13.4378C16.2172 13.4484 16.2278 13.4749 16.2489 13.5226C16.2807 13.5861 16.3337 13.6655 16.3866 13.745C16.4025 13.7556 16.4237 13.7662 16.4449 13.7767C16.4502 13.7767 16.4555 13.782 16.4555 13.782C16.4766 13.7926 16.4978 13.8032 16.5243 13.8138C16.5296 13.8138 16.5296 13.8191 16.5349 13.8191C16.5614 13.8297 16.5878 13.8403 16.6143 13.8509C16.6408 13.8615 16.6726 13.8721 16.6991 13.8827C16.7043 13.8827 16.7096 13.888 16.7149 13.888C16.7414 13.8985 16.7732 13.9038 16.805 13.9144C16.8103 13.9144 16.8156 13.9197 16.8208 13.9197C16.8526 13.925 16.8844 13.9356 16.9162 13.9409C16.9215 13.9409 16.9268 13.9409 16.9321 13.9409H16.9373C16.7732 13.8085 16.6143 13.6708 16.4713 13.5543Z"
            fill="#24420D"></path>
        <path
            d="M7.6226 13.8033C7.64378 13.7397 7.65967 13.6868 7.65437 13.6391C7.65437 13.6285 7.64908 13.6126 7.64908 13.6021C7.6173 13.655 7.58553 13.7133 7.54846 13.7768C7.58023 13.7768 7.60671 13.7874 7.6226 13.8033Z"
            fill="#24420D"></path>
        <path opacity="0.24"
            d="M19.0025 16.6687C18.7431 15.6096 17.3821 14.291 16.4713 13.5549C16.4872 13.5655 16.5084 13.5708 16.5243 13.5814C16.5296 13.5814 16.5296 13.5867 16.5348 13.5867C16.5613 13.5973 16.5878 13.6079 16.6143 13.6185C16.6408 13.629 16.6725 13.6396 16.699 13.6502C16.7043 13.6502 16.7096 13.6555 16.7149 13.6555C16.7414 13.6661 16.7731 13.6714 16.8049 13.682C16.8102 13.682 16.8155 13.6873 16.8208 13.6873C16.8526 13.6926 16.8843 13.7032 16.9161 13.7085C16.9214 13.7085 16.9267 13.7085 16.932 13.7085C16.9691 13.7138 17.0008 13.7191 17.0379 13.7244C17.075 13.7297 17.1121 13.7297 17.1491 13.7297C17.1544 13.7297 17.1597 13.7297 17.165 13.7297C17.2021 13.7297 17.2391 13.7244 17.2762 13.7191C17.2815 13.7191 17.2921 13.7191 17.2974 13.7138C17.3345 13.7085 17.3715 13.7032 17.4086 13.6926C17.4139 13.6926 17.4192 13.6873 17.4245 13.6873C17.4669 13.6767 17.5039 13.6608 17.5463 13.6449C17.5569 13.6396 17.5622 13.6343 17.5675 13.629L17.5728 13.6238C17.5781 13.6185 17.5781 13.6185 17.5834 13.6132V13.6079C17.5834 13.6026 17.5834 13.5973 17.5834 13.592C17.5834 13.5867 17.5781 13.5761 17.5728 13.5708C17.5728 13.5655 17.5675 13.5655 17.5675 13.5602C17.5622 13.5549 17.5569 13.5496 17.5516 13.5443C17.5463 13.539 17.5463 13.539 17.541 13.5337C17.5357 13.5284 17.5251 13.5178 17.5198 13.5125C17.218 13.2266 15.9312 12.5435 15.2745 11.2037C15.5234 11.2196 15.7405 11.1243 15.7617 10.9919C15.7723 10.9336 15.7352 10.8595 15.6346 10.7854C15.1845 10.4412 14.2525 9.09612 13.9771 8.45007C14.1413 8.54539 14.3055 8.61423 14.4378 8.62482C14.7026 8.646 14.6338 8.54539 14.4696 8.42889C14.2578 8.26473 13.8606 7.99995 13.76 7.74047C13.617 7.38038 13.4688 6.87731 13.2781 6.38483C13.3099 6.39013 13.3417 6.39542 13.3734 6.39542C13.5694 6.39542 13.6488 6.34776 13.6435 6.26304C13.6382 6.15183 13.4847 5.98767 13.2517 5.78644C12.8333 5.42635 12.5897 4.67969 11.9278 4.67969H11.9225C12.3726 4.98683 12.4256 5.51108 12.5791 5.81292C12.7698 6.19419 12.9657 6.28951 13.0134 6.3054C12.9498 6.28422 12.5844 6.1836 12.828 6.73963C13.0981 7.34861 13.2464 7.26918 13.0822 7.66634C12.918 8.0635 12.8439 8.42889 13.2569 8.79957C13.67 9.17025 12.3991 8.54009 13.2569 9.49857C14.1148 10.4518 13.2781 10.5365 13.7918 10.9442C14.3107 11.352 14.2631 11.4791 14.0354 11.6062C13.8077 11.7333 15.2322 13.0148 15.158 13.6079C15.0839 14.201 15.7246 14.381 15.5923 14.7411C15.4599 15.1012 16.5719 16.6528 16.5719 17.4471C16.5719 17.4736 16.5772 17.5 16.5825 17.5265C16.8685 17.6536 17.1544 17.7595 17.3451 17.7436C17.6363 17.7225 17.6575 17.3782 17.6363 17.0817C17.6363 17.0764 17.6363 17.0711 17.6363 17.0658C17.6151 16.8328 17.5622 16.5998 17.5622 16.4833C17.5622 16.4727 17.5675 16.4621 17.5675 16.4568C17.6734 16.2662 19.1137 17.1294 19.0025 16.6687Z"
            fill="#366E0D"></path>
        <path opacity="0.24"
            d="M11.7424 4.71094C11.2182 4.91746 10.6039 5.88653 10.4291 6.06128C10.2862 6.20426 10.4397 6.40019 10.7257 6.37372C10.7204 6.38431 10.7204 6.3949 10.7151 6.40549C10.7045 6.42667 10.6992 6.45315 10.6886 6.47963C10.678 6.50081 10.6727 6.52729 10.6621 6.54847C10.6569 6.56435 10.6463 6.58554 10.641 6.60142C10.5933 6.71263 10.5404 6.82913 10.4821 6.94563C10.4821 6.94563 10.4821 6.95092 10.4768 6.95092C10.4556 6.99329 10.4344 7.04095 10.408 7.08331C10.1273 7.62345 9.77251 8.16888 9.59246 8.30127C9.36476 8.47073 9.60835 8.58723 9.86783 8.53427C9.49714 9.36566 8.50689 10.626 8.23153 10.9014C8.0303 11.1026 8.44334 11.1026 8.86169 10.9861C8.40098 11.8916 6.94472 13.3161 6.51579 13.5915C6.02331 13.9039 6.72231 13.8139 7.30482 13.5915C7.52723 13.5067 7.62255 13.5279 7.64902 13.6073C7.13007 14.5182 5.73736 16.3345 5.28195 16.8217C5.26076 16.8429 5.24488 16.8641 5.22899 16.8799C5.22369 16.8852 5.2131 16.8958 5.20781 16.9011C5.20251 16.9064 5.19722 16.9117 5.19722 16.9117C5.18663 16.9223 5.17604 16.9276 5.17074 16.9329C5.15485 16.9435 5.13897 16.9594 5.13367 16.97C4.99069 17.1447 5.6844 17.2189 5.99154 17.0812C6.21395 16.9806 6.18747 17.3195 6.35163 17.5737C6.69054 17.293 7.24127 16.8005 6.99238 16.7529C6.64288 16.6893 6.5052 16.6416 6.63759 15.9956C6.76997 15.3548 7.58018 14.6505 7.60666 14.2693C7.63314 13.888 8.75578 13.3532 8.16268 13.3637C7.56959 13.3743 7.77611 12.9772 8.18387 12.6489C8.59691 12.3205 9.51833 10.7584 9.50774 10.3665C9.49714 9.96935 9.12117 10.5466 8.8511 10.5677C8.58103 10.5889 9.28533 9.93228 9.61365 9.47687C9.94196 9.01616 10.5562 7.96236 10.3285 8.0365C10.1061 8.11063 9.87842 8.15829 10.3285 7.58638C10.7787 7.01447 10.911 6.36313 10.911 6.36313C10.911 6.36313 11.1123 6.12483 10.8051 6.12483C10.498 6.12483 11.0169 5.3358 11.7424 4.71094Z"
            fill="#366E0D"></path>
        <path
            d="M15.9206 17.9078C16.1838 17.9078 16.3972 17.6944 16.3972 17.4312C16.3972 17.168 16.1838 16.9546 15.9206 16.9546C15.6573 16.9546 15.444 17.168 15.444 17.4312C15.444 17.6944 15.6573 17.9078 15.9206 17.9078Z"
            fill="url(#paint17_radial)"></path>
        <path
            d="M15.9206 17.9078C16.1838 17.9078 16.3972 17.6944 16.3972 17.4312C16.3972 17.168 16.1838 16.9546 15.9206 16.9546C15.6573 16.9546 15.444 17.168 15.444 17.4312C15.444 17.6944 15.6573 17.9078 15.9206 17.9078Z"
            fill="url(#paint18_radial)"></path>
        <path
            d="M15.9206 17.9078C16.1838 17.9078 16.3972 17.6944 16.3972 17.4312C16.3972 17.168 16.1838 16.9546 15.9206 16.9546C15.6573 16.9546 15.444 17.168 15.444 17.4312C15.444 17.6944 15.6573 17.9078 15.9206 17.9078Z"
            fill="url(#paint19_radial)"></path>
        <path
            d="M15.9206 17.9078C16.1019 17.9078 16.2489 17.6944 16.2489 17.4312C16.2489 17.168 16.1019 16.9546 15.9206 16.9546C15.7393 16.9546 15.5923 17.168 15.5923 17.4312C15.5923 17.6944 15.7393 17.9078 15.9206 17.9078Z"
            fill="url(#paint20_linear)"></path>
        <path
            d="M16 17.8442C16.2164 17.8442 16.3919 17.6592 16.3919 17.4311C16.3919 17.203 16.2164 17.0181 16 17.0181C15.7836 17.0181 15.6082 17.203 15.6082 17.4311C15.6082 17.6592 15.7836 17.8442 16 17.8442Z"
            fill="url(#paint21_linear)"></path>
        <path
            d="M15.9311 17.5851C15.8093 17.5851 15.6558 17.6274 15.571 17.7545C15.6558 17.8498 15.7829 17.9081 15.9205 17.9081C16.1853 17.9081 16.3971 17.6963 16.3971 17.4315C16.3971 17.3415 16.3707 17.2515 16.3283 17.1826C16.3124 17.4315 16.0847 17.5851 15.9311 17.5851Z"
            fill="url(#paint22_radial)"></path>
        <path
            d="M15.9471 16.9546C16.1006 17.0287 16.2065 17.1823 16.2065 17.3676C16.2065 17.6165 16.0053 17.8231 15.7511 17.8231C15.7035 17.8231 15.6558 17.8125 15.6082 17.8019C15.6929 17.8707 15.7988 17.9131 15.9153 17.9131C16.1801 17.9131 16.3919 17.7013 16.3919 17.4365C16.4025 17.1717 16.2012 16.9652 15.9471 16.9546Z"
            fill="url(#paint23_linear)"></path>
        <path
            d="M15.9206 17.9078C16.1838 17.9078 16.3972 17.6944 16.3972 17.4312C16.3972 17.168 16.1838 16.9546 15.9206 16.9546C15.6573 16.9546 15.444 17.168 15.444 17.4312C15.444 17.6944 15.6573 17.9078 15.9206 17.9078Z"
            fill="url(#paint24_radial)"></path>
        <path opacity="0.48"
            d="M15.9841 17.0393C16.0318 17.1134 15.9735 17.2405 15.8517 17.3199C15.7299 17.3994 15.587 17.4047 15.5393 17.3305C15.4916 17.2564 15.5499 17.1293 15.6717 17.0499C15.7935 16.9704 15.9312 16.9651 15.9841 17.0393Z"
            fill="url(#paint25_radial)"></path>
        <path
            d="M15.8146 16.8647V16.9495C15.8146 16.976 15.8252 16.9918 15.8411 16.9918C15.8569 16.9918 15.8675 16.9812 15.8728 16.9707C15.8728 16.9654 15.8781 16.9654 15.8834 16.9707C15.8887 16.9865 15.9046 16.9971 15.9205 16.9971C15.9364 16.9971 15.9523 16.9865 15.9576 16.9707C15.9576 16.9654 15.9629 16.9654 15.9681 16.9707C15.9734 16.9865 15.984 16.9918 15.9999 16.9918C16.0211 16.9918 16.0264 16.9707 16.0264 16.9495V16.8647H15.8146Z"
            fill="url(#paint26_linear)"></path>
        <path opacity="0.75"
            d="M15.8464 16.8647C15.8464 16.923 15.8199 17.0024 15.8517 16.9918C15.8623 16.9865 15.8676 16.9812 15.8729 16.9707C15.8729 16.9654 15.8782 16.9654 15.8835 16.9707C15.8888 16.976 15.8888 16.9812 15.8941 16.9865C15.8888 16.9548 15.8888 16.8806 15.8941 16.8647H15.8464Z"
            fill="url(#paint27_linear)"></path>
        <path
            d="M15.9205 16.8856C15.9819 16.8856 16.0317 16.8761 16.0317 16.8644C16.0317 16.8527 15.9819 16.8433 15.9205 16.8433C15.8591 16.8433 15.8093 16.8527 15.8093 16.8644C15.8093 16.8761 15.8591 16.8856 15.9205 16.8856Z"
            fill="url(#paint28_linear)"></path>
        <path
            d="M15.9205 16.8856C15.9819 16.8856 16.0317 16.8761 16.0317 16.8644C16.0317 16.8527 15.9819 16.8433 15.9205 16.8433C15.8591 16.8433 15.8093 16.8527 15.8093 16.8644C15.8093 16.8761 15.8591 16.8856 15.9205 16.8856Z"
            fill="url(#paint29_linear)"></path>
        <path
            d="M15.9258 16.8644H15.9205H15.9152C15.9152 16.8485 15.9047 16.8062 15.8941 16.7691C15.8835 16.732 15.8782 16.7003 15.8782 16.6844C15.8782 16.6526 15.8994 16.6367 15.9205 16.6367C15.9417 16.6367 15.9629 16.6526 15.9629 16.6844C15.9629 16.7003 15.9523 16.732 15.947 16.7691C15.9364 16.8115 15.9258 16.8485 15.9258 16.8644ZM15.9205 16.6526C15.9047 16.6526 15.8888 16.6685 15.8888 16.6897C15.8888 16.7003 15.8994 16.7373 15.9047 16.7691C15.9099 16.7903 15.9152 16.8115 15.9205 16.8274C15.9258 16.8115 15.9311 16.7903 15.9364 16.7691C15.947 16.7373 15.9523 16.7003 15.9523 16.6897C15.9523 16.6632 15.9364 16.6526 15.9205 16.6526Z"
            fill="url(#paint30_linear)"></path>
        <path
            d="M15.9205 16.6421C15.8994 16.6421 15.8782 16.658 15.8782 16.6897C15.8782 16.7056 15.8888 16.7374 15.8941 16.7745C15.9047 16.8115 15.9152 16.8486 15.9152 16.8698C15.9152 16.8698 15.9152 16.8698 15.9205 16.8698C15.9258 16.8698 15.9258 16.8698 15.9258 16.8698C15.9258 16.8539 15.9364 16.8115 15.947 16.7745C15.9576 16.7374 15.9629 16.7056 15.9629 16.6897C15.9629 16.658 15.9417 16.6421 15.9205 16.6421ZM15.9364 16.7692C15.9311 16.7904 15.9258 16.8115 15.9205 16.8274C15.9152 16.8115 15.9099 16.7904 15.9047 16.7692C15.8941 16.7374 15.8888 16.7003 15.8888 16.6897C15.8888 16.6633 15.9047 16.6527 15.9205 16.6527C15.9364 16.6527 15.9523 16.6686 15.9523 16.6897C15.9523 16.7003 15.947 16.7374 15.9364 16.7692Z"
            fill="url(#paint31_linear)"></path>
        <path
            d="M11.9648 3.04305L12.2932 3.70498C12.2985 3.71557 12.309 3.72087 12.3143 3.72087L13.0451 3.82678C13.1034 3.83737 13.1298 3.90621 13.0875 3.94857L12.5738 4.45164C12.5579 4.46753 12.5473 4.49401 12.5526 4.51519L12.6744 5.21949C12.685 5.27774 12.6215 5.3254 12.5685 5.29362L11.9172 4.94942C11.9066 4.94412 11.896 4.94412 11.8907 4.94942L11.2394 5.29362C11.1864 5.3201 11.1229 5.27774 11.1335 5.21949L11.2605 4.49401C11.2605 4.48342 11.2605 4.47283 11.25 4.46753L10.7204 3.95387C10.678 3.91151 10.6992 3.83737 10.7628 3.83207L11.4935 3.72616C11.5041 3.72616 11.5147 3.72087 11.5147 3.71028L11.843 3.04834C11.8642 2.9848 11.9384 2.9848 11.9648 3.04305Z"
            fill="url(#paint32_radial)"></path>
        <path
            d="M11.1017 4.1712C10.964 4.03352 10.7734 3.87995 10.8104 3.81641L10.7575 3.8217C10.6992 3.83229 10.6728 3.90113 10.7151 3.9435L11.2447 4.45716C11.25 4.46246 11.2553 4.47305 11.2553 4.48364C11.2765 4.36184 11.2394 4.30889 11.1017 4.1712Z"
            fill="url(#paint33_radial)"></path>
        <path
            d="M12.701 4.1712C12.8386 4.03352 13.0293 3.87995 12.9922 3.81641L13.0452 3.8217C13.1034 3.83229 13.1299 3.90113 13.0875 3.9435L12.558 4.45716C12.5527 4.46246 12.5474 4.47305 12.5474 4.48364C12.5315 4.36184 12.5686 4.30889 12.701 4.1712Z"
            fill="url(#paint34_radial)"></path>
        <path
            d="M13.0451 3.8267L12.3143 3.72079C12.3038 3.72079 12.2932 3.71549 12.2932 3.7049L11.9648 3.04297C11.9648 3.04297 11.9331 3.08004 12.0019 3.21772C12.0443 3.30774 12.1608 3.56193 12.2243 3.69431C12.2614 3.76845 12.3143 3.76845 12.3938 3.77904L12.9339 3.84788C12.9392 3.84788 12.9975 3.85318 13.0451 3.8267Z"
            fill="url(#paint35_radial)"></path>
        <path
            d="M11.9648 3.04305L12.2932 3.70498C12.2985 3.71557 12.309 3.72087 12.3143 3.72087L13.0451 3.82678C13.1034 3.83737 13.1298 3.90621 13.0875 3.94857L12.5738 4.45164C12.5579 4.46753 12.5473 4.49401 12.5526 4.51519L12.6744 5.21949C12.685 5.27774 12.6215 5.3254 12.5685 5.29362L11.9172 4.94942C11.9066 4.94412 11.896 4.94412 11.8907 4.94942L11.2394 5.29362C11.1864 5.3201 11.1229 5.27774 11.1335 5.21949L11.2605 4.49401C11.2605 4.48342 11.2605 4.47283 11.25 4.46753L10.7204 3.95387C10.678 3.91151 10.6992 3.83737 10.7628 3.83207L11.4935 3.72616C11.5041 3.72616 11.5147 3.72087 11.5147 3.71028L11.843 3.04834C11.8642 2.9848 11.9384 2.9848 11.9648 3.04305Z"
            fill="url(#paint36_radial)"></path>
        <path
            d="M11.9648 3.04305L12.2932 3.70498C12.2985 3.71557 12.309 3.72087 12.3143 3.72087L13.0451 3.82678C13.1034 3.83737 13.1298 3.90621 13.0875 3.94857L12.5738 4.45164C12.5579 4.46753 12.5473 4.49401 12.5526 4.51519L12.6744 5.21949C12.685 5.27774 12.6215 5.3254 12.5685 5.29362L11.9172 4.94942C11.9066 4.94412 11.896 4.94412 11.8907 4.94942L11.2394 5.29362C11.1864 5.3201 11.1229 5.27774 11.1335 5.21949L11.2605 4.49401C11.2605 4.48342 11.2605 4.47283 11.25 4.46753L10.7204 3.95387C10.678 3.91151 10.6992 3.83737 10.7628 3.83207L11.4935 3.72616C11.5041 3.72616 11.5147 3.72087 11.5147 3.71028L11.843 3.04834C11.8642 2.9848 11.9384 2.9848 11.9648 3.04305Z"
            fill="url(#paint37_radial)"></path>
        <path
            d="M11.8378 3.04305L11.5095 3.70498C11.5042 3.71557 11.4936 3.72087 11.4883 3.72087L10.7575 3.82678C10.6992 3.83737 10.6728 3.90621 10.7151 3.94857L11.2288 4.45164C11.2447 4.46753 11.2553 4.49401 11.25 4.51519L11.1282 5.21949C11.1176 5.27774 11.1811 5.3254 11.2341 5.29362L11.8854 4.94942C11.896 4.94412 11.9066 4.94412 11.9119 4.94942L12.5633 5.29362C12.6162 5.3201 12.6798 5.27774 12.6692 5.21949L12.5421 4.49401C12.5421 4.48342 12.5421 4.47283 12.5527 4.46753L13.0822 3.95387C13.1246 3.91151 13.1034 3.83737 13.0398 3.83207L12.3091 3.72616C12.2985 3.72616 12.2879 3.72087 12.2879 3.71028L11.9596 3.04834C11.9384 2.9848 11.8642 2.9848 11.8378 3.04305Z"
            fill="url(#paint38_radial)"></path>
        <path
            d="M11.8378 3.04305L11.5095 3.70498C11.5042 3.71557 11.4936 3.72087 11.4883 3.72087L10.7575 3.82678C10.6992 3.83737 10.6728 3.90621 10.7151 3.94857L11.2288 4.45164C11.2447 4.46753 11.2553 4.49401 11.25 4.51519L11.1282 5.21949C11.1176 5.27774 11.1811 5.3254 11.2341 5.29362L11.8854 4.94942C11.896 4.94412 11.9066 4.94412 11.9119 4.94942L12.5633 5.29362C12.6162 5.3201 12.6798 5.27774 12.6692 5.21949L12.5421 4.49401C12.5421 4.48342 12.5421 4.47283 12.5527 4.46753L13.0822 3.95387C13.1246 3.91151 13.1034 3.83737 13.0398 3.83207L12.3091 3.72616C12.2985 3.72616 12.2879 3.72087 12.2879 3.71028L11.9596 3.04834C11.9384 2.9848 11.8642 2.9848 11.8378 3.04305Z"
            fill="url(#paint39_radial)"></path>
        <path opacity="0.24"
            d="M11.8378 3.04305L11.5095 3.70498C11.5042 3.71557 11.4936 3.72087 11.4883 3.72087L10.7575 3.82678C10.6992 3.83737 10.6728 3.90621 10.7151 3.94857L11.2288 4.45164C11.2447 4.46753 11.2553 4.49401 11.25 4.51519L11.1282 5.21949C11.1176 5.27774 11.1811 5.3254 11.2341 5.29362L11.8854 4.94942C11.896 4.94412 11.9066 4.94412 11.9119 4.94942L12.5633 5.29362C12.6162 5.3201 12.6798 5.27774 12.6692 5.21949L12.5421 4.49401C12.5421 4.48342 12.5421 4.47283 12.5527 4.46753L13.0822 3.95387C13.1246 3.91151 13.1034 3.83737 13.0398 3.83207L12.3091 3.72616C12.2985 3.72616 12.2879 3.72087 12.2879 3.71028L11.9596 3.04834C11.9384 2.9848 11.8642 2.9848 11.8378 3.04305Z"
            fill="url(#paint40_radial)"></path>
        <path opacity="0.24"
            d="M11.8378 3.04305L11.5095 3.70498C11.5042 3.71557 11.4936 3.72087 11.4883 3.72087L10.7575 3.82678C10.6992 3.83737 10.6728 3.90621 10.7151 3.94857L11.2288 4.45164C11.2447 4.46753 11.2553 4.49401 11.25 4.51519L11.1282 5.21949C11.1176 5.27774 11.1811 5.3254 11.2341 5.29362L11.8854 4.94942C11.896 4.94412 11.9066 4.94412 11.9119 4.94942L12.5633 5.29362C12.6162 5.3201 12.6798 5.27774 12.6692 5.21949L12.5421 4.49401C12.5421 4.48342 12.5421 4.47283 12.5527 4.46753L13.0822 3.95387C13.1246 3.91151 13.1034 3.83737 13.0398 3.83207L12.3091 3.72616C12.2985 3.72616 12.2879 3.72087 12.2879 3.71028L11.9596 3.04834C11.9384 2.9848 11.8642 2.9848 11.8378 3.04305Z"
            fill="url(#paint41_radial)"></path>
        <path
            d="M10.7576 3.8267L11.4883 3.72079C11.4989 3.72079 11.5095 3.71549 11.5095 3.7049L11.8378 3.04297C11.8378 3.04297 11.8696 3.08004 11.8008 3.21772C11.7584 3.30774 11.6419 3.56193 11.5784 3.69431C11.5413 3.76845 11.4883 3.76845 11.4089 3.77904L10.8688 3.84788C10.8688 3.84788 10.8052 3.85318 10.7576 3.8267Z"
            fill="url(#paint42_radial)"></path>
        <path opacity="0.5"
            d="M11.9648 3.04305L12.2932 3.70498C12.2985 3.71557 12.309 3.72087 12.3143 3.72087L13.0451 3.82678C13.1034 3.83737 13.1298 3.90621 13.0875 3.94857L12.5738 4.45164C12.5579 4.46753 12.5473 4.49401 12.5526 4.51519L12.6744 5.21949C12.685 5.27774 12.6215 5.3254 12.5685 5.29362L11.9172 4.94942C11.9066 4.94412 11.896 4.94412 11.8907 4.94942L11.2394 5.29362C11.1864 5.3201 11.1229 5.27774 11.1335 5.21949L11.2605 4.49401C11.2605 4.48342 11.2605 4.47283 11.25 4.46753L10.7204 3.95387C10.678 3.91151 10.6992 3.83737 10.7628 3.83207L11.4935 3.72616C11.5041 3.72616 11.5147 3.72087 11.5147 3.71028L11.843 3.04834C11.8642 2.9848 11.9384 2.9848 11.9648 3.04305Z"
            fill="url(#paint43_radial)"></path>
        <path
            d="M12.6745 5.21958L12.5527 4.51528C12.5474 4.4941 12.558 4.46762 12.5738 4.45173L13.0875 3.94866C13.1299 3.9063 13.1087 3.83216 13.0451 3.82686L12.3144 3.72096C12.3038 3.72096 12.2932 3.71566 12.2932 3.70507L11.9649 3.04313C11.9384 2.99018 11.8642 2.99018 11.8378 3.04313L11.5095 3.70507C11.5042 3.71566 11.4936 3.72096 11.4883 3.72096L10.7575 3.82686C10.6992 3.83746 10.6728 3.9063 10.7151 3.94866L11.2447 4.46232C11.25 4.46762 11.2553 4.47821 11.2553 4.4888L11.1282 5.21428C11.1176 5.27253 11.1811 5.32019 11.2341 5.28842L11.8854 4.94421C11.896 4.93892 11.9066 4.93892 11.9119 4.94421L12.5632 5.28842C12.6215 5.32019 12.685 5.27783 12.6745 5.21958ZM12.6215 5.25664C12.6162 5.26194 12.6056 5.26723 12.5897 5.25664L11.9384 4.91244C11.9278 4.90714 11.9172 4.90185 11.9066 4.90185C11.896 4.90185 11.8854 4.90714 11.8748 4.91244L11.2235 5.25664C11.2076 5.26723 11.197 5.25664 11.1917 5.25664C11.1864 5.25135 11.1758 5.24605 11.1811 5.22487L11.3082 4.49939C11.3135 4.47821 11.3029 4.45173 11.287 4.43584L10.7575 3.92218C10.7469 3.91159 10.7469 3.89571 10.7522 3.89041C10.7522 3.88512 10.7575 3.86923 10.7787 3.86923L11.5095 3.76332C11.5306 3.75802 11.5518 3.74743 11.5624 3.72625L11.8907 3.06432C11.896 3.04843 11.9119 3.04843 11.9172 3.04843C11.9225 3.04843 11.9384 3.04843 11.9437 3.06432L12.272 3.72625C12.2826 3.74743 12.3038 3.76332 12.325 3.76332L13.0557 3.86923C13.0716 3.86923 13.0769 3.88512 13.0822 3.89041C13.0822 3.89571 13.0875 3.91159 13.0769 3.92218L12.5632 4.42525C12.5368 4.45173 12.5262 4.4888 12.5315 4.52587L12.6533 5.23017C12.6374 5.24605 12.6268 5.25135 12.6215 5.25664Z"
            fill="url(#paint44_radial)"></path>
        <path
            d="M11.4142 7.52301C11.6774 7.52301 11.8908 7.30963 11.8908 7.04642C11.8908 6.7832 11.6774 6.56982 11.4142 6.56982C11.151 6.56982 10.9376 6.7832 10.9376 7.04642C10.9376 7.30963 11.151 7.52301 11.4142 7.52301Z"
            fill="url(#paint45_radial)"></path>
        <path opacity="0.24"
            d="M11.3505 6.53829C11.3981 6.61242 11.3399 6.73951 11.2181 6.81895C11.0963 6.89838 10.9533 6.90367 10.9056 6.82954C10.858 6.7554 10.9162 6.62831 11.038 6.54888C11.1598 6.46945 11.3028 6.46415 11.3505 6.53829Z"
            fill="url(#paint46_radial)"></path>
        <path
            d="M11.2923 7.4068C11.5555 7.4068 11.7689 7.19342 11.7689 6.93021C11.7689 6.66699 11.5555 6.45361 11.2923 6.45361C11.0291 6.45361 10.8157 6.66699 10.8157 6.93021C10.8157 7.19342 11.0291 7.4068 11.2923 7.4068Z"
            fill="url(#paint47_radial)"></path>
        <path
            d="M11.2923 7.4068C11.5555 7.4068 11.7689 7.19342 11.7689 6.93021C11.7689 6.66699 11.5555 6.45361 11.2923 6.45361C11.0291 6.45361 10.8157 6.66699 10.8157 6.93021C10.8157 7.19342 11.0291 7.4068 11.2923 7.4068Z"
            fill="url(#paint48_radial)"></path>
        <path
            d="M11.2923 7.4068C11.5555 7.4068 11.7689 7.19342 11.7689 6.93021C11.7689 6.66699 11.5555 6.45361 11.2923 6.45361C11.0291 6.45361 10.8157 6.66699 10.8157 6.93021C10.8157 7.19342 11.0291 7.4068 11.2923 7.4068Z"
            fill="url(#paint49_radial)"></path>
        <path
            d="M11.2923 7.4068C11.4736 7.4068 11.6206 7.19342 11.6206 6.93021C11.6206 6.66699 11.4736 6.45361 11.2923 6.45361C11.111 6.45361 10.964 6.66699 10.964 6.93021C10.964 7.19342 11.111 7.4068 11.2923 7.4068Z"
            fill="url(#paint50_linear)"></path>
        <path
            d="M11.3717 7.34319C11.5881 7.34319 11.7636 7.15826 11.7636 6.93014C11.7636 6.70202 11.5881 6.51709 11.3717 6.51709C11.1553 6.51709 10.9799 6.70202 10.9799 6.93014C10.9799 7.15826 11.1553 7.34319 11.3717 7.34319Z"
            fill="url(#paint51_linear)"></path>
        <path
            d="M11.3028 7.08898C11.181 7.08898 11.0275 7.13134 10.9427 7.25843C11.0275 7.35375 11.1546 7.412 11.2923 7.412C11.557 7.412 11.7688 7.20018 11.7688 6.93541C11.7688 6.84539 11.7424 6.75536 11.7 6.68652C11.6841 6.93012 11.4564 7.08898 11.3028 7.08898Z"
            fill="url(#paint52_radial)"></path>
        <path
            d="M11.3188 6.45361C11.4723 6.52775 11.5782 6.68132 11.5782 6.86666C11.5782 7.11555 11.377 7.32207 11.1228 7.32207C11.0752 7.32207 11.0275 7.31148 10.9799 7.30089C11.0646 7.36973 11.1705 7.4121 11.287 7.4121C11.5518 7.4121 11.7636 7.20028 11.7636 6.9355C11.7689 6.67602 11.573 6.4642 11.3188 6.45361Z"
            fill="url(#paint53_linear)"></path>
        <path
            d="M11.2923 7.4068C11.5555 7.4068 11.7689 7.19342 11.7689 6.93021C11.7689 6.66699 11.5555 6.45361 11.2923 6.45361C11.0291 6.45361 10.8157 6.66699 10.8157 6.93021C10.8157 7.19342 11.0291 7.4068 11.2923 7.4068Z"
            fill="url(#paint54_radial)"></path>
        <path
            d="M11.1863 6.36377V6.4485C11.1863 6.47497 11.1969 6.49086 11.2128 6.49086C11.2286 6.49086 11.2392 6.48027 11.2445 6.46968C11.2445 6.46438 11.2498 6.46438 11.2551 6.46968C11.2604 6.48556 11.2763 6.49616 11.2922 6.49616C11.3081 6.49616 11.324 6.48556 11.3293 6.46968C11.3293 6.46438 11.3346 6.46438 11.3398 6.46968C11.3451 6.48556 11.3557 6.49086 11.3716 6.49086C11.3928 6.49086 11.3981 6.46968 11.3981 6.4485V6.36377H11.1863V6.36377Z"
            fill="url(#paint55_linear)"></path>
        <path opacity="0.75"
            d="M11.2181 6.36377C11.2181 6.42202 11.1916 6.50145 11.2234 6.49086C11.234 6.48557 11.2393 6.48027 11.2446 6.46968C11.2446 6.46438 11.2499 6.46438 11.2552 6.46968C11.2605 6.47497 11.2605 6.48027 11.2658 6.48557C11.2605 6.45379 11.2605 6.37966 11.2658 6.36377H11.2181Z"
            fill="url(#paint56_linear)"></path>
        <path
            d="M11.2922 6.38465C11.3537 6.38465 11.4034 6.37517 11.4034 6.36347C11.4034 6.35177 11.3537 6.34229 11.2922 6.34229C11.2308 6.34229 11.181 6.35177 11.181 6.36347C11.181 6.37517 11.2308 6.38465 11.2922 6.38465Z"
            fill="url(#paint57_linear)"></path>
        <path
            d="M11.2922 6.38465C11.3537 6.38465 11.4034 6.37517 11.4034 6.36347C11.4034 6.35177 11.3537 6.34229 11.2922 6.34229C11.2308 6.34229 11.181 6.35177 11.181 6.36347C11.181 6.37517 11.2308 6.38465 11.2922 6.38465Z"
            fill="url(#paint58_linear)"></path>
        <path
            d="M11.2975 6.36345H11.2922H11.2869C11.2869 6.34756 11.2764 6.3052 11.2658 6.26813C11.2552 6.23106 11.2499 6.19929 11.2499 6.1834C11.2499 6.15163 11.2711 6.13574 11.2922 6.13574C11.3134 6.13574 11.3346 6.15163 11.3346 6.1834C11.3346 6.19929 11.324 6.23106 11.3187 6.26813C11.3081 6.31049 11.2975 6.34756 11.2975 6.36345ZM11.2922 6.15163C11.2764 6.15163 11.2605 6.16752 11.2605 6.1887C11.2605 6.19929 11.2711 6.23636 11.2764 6.26813C11.2817 6.28931 11.2869 6.31049 11.2922 6.32638C11.2975 6.31049 11.3028 6.28931 11.3081 6.26813C11.3187 6.23636 11.324 6.19929 11.324 6.1887C11.324 6.16222 11.3081 6.15163 11.2922 6.15163Z"
            fill="url(#paint59_linear)"></path>
        <path
            d="M11.2922 6.14111C11.2711 6.14111 11.2499 6.157 11.2499 6.18877C11.2499 6.20466 11.2605 6.23643 11.2658 6.2735C11.2764 6.31057 11.2869 6.34764 11.2869 6.36882C11.2869 6.36882 11.2869 6.36882 11.2922 6.36882C11.2975 6.36882 11.2975 6.36882 11.2975 6.36882C11.2975 6.35293 11.3081 6.31057 11.3187 6.2735C11.3293 6.23643 11.3346 6.20466 11.3346 6.18877C11.3346 6.157 11.3134 6.14111 11.2922 6.14111ZM11.3081 6.2682C11.3028 6.28939 11.2975 6.31057 11.2922 6.32645C11.2869 6.31057 11.2817 6.28939 11.2764 6.2682C11.2658 6.23643 11.2605 6.19936 11.2605 6.18877C11.2605 6.1623 11.2764 6.1517 11.2922 6.1517C11.3081 6.1517 11.324 6.16759 11.324 6.18877C11.324 6.19936 11.3134 6.23643 11.3081 6.2682Z"
            fill="url(#paint60_linear)"></path>
        <path
            d="M11.2924 6.14062C11.2712 6.14062 11.25 6.15651 11.25 6.18828C11.25 6.20417 11.2606 6.23594 11.2659 6.27301C11.2765 6.31008 11.2871 6.34715 11.2871 6.36833C11.2871 6.36833 11.2871 6.36833 11.2924 6.36833C11.2977 6.36833 11.2977 6.36833 11.2977 6.36833C11.2977 6.35244 11.3083 6.31008 11.3188 6.27301C11.3294 6.23594 11.3347 6.20417 11.3347 6.18828C11.3347 6.15651 11.3135 6.14062 11.2924 6.14062ZM11.3083 6.26772C11.303 6.2889 11.2977 6.31008 11.2924 6.32597C11.2871 6.31008 11.2818 6.2889 11.2765 6.26772C11.2659 6.23594 11.2606 6.19888 11.2606 6.18828C11.2606 6.16181 11.2765 6.15122 11.2924 6.15122C11.3083 6.15122 11.3241 6.1671 11.3241 6.18828C11.3241 6.19888 11.3135 6.23594 11.3083 6.26772Z"
            fill="url(#paint61_linear)"></path>
        <path
            d="M10.4875 10.3506C10.7507 10.3506 10.9641 10.1373 10.9641 9.87405C10.9641 9.61084 10.7507 9.39746 10.4875 9.39746C10.2242 9.39746 10.0109 9.61084 10.0109 9.87405C10.0109 10.1373 10.2242 10.3506 10.4875 10.3506Z"
            fill="url(#paint62_radial)"></path>
        <path
            d="M10.3657 8.96875C10.3445 8.96875 10.3234 8.98464 10.3234 9.01641C10.3234 9.0323 10.334 9.06407 10.3393 9.10114C10.3498 9.13821 10.3604 9.17527 10.3604 9.19646C10.3604 9.19646 10.3604 9.19646 10.3657 9.19646C10.371 9.19646 10.371 9.19646 10.371 9.19646C10.371 9.18057 10.3816 9.13821 10.3922 9.10114C10.4028 9.06407 10.4081 9.0323 10.4081 9.01641C10.4081 8.98464 10.3869 8.96875 10.3657 8.96875ZM10.3816 9.09584C10.3763 9.11702 10.371 9.13821 10.3657 9.15409C10.3604 9.13821 10.3551 9.11702 10.3498 9.09584C10.3393 9.06407 10.334 9.027 10.334 9.01641C10.334 8.98993 10.3498 8.97934 10.3657 8.97934C10.3816 8.97934 10.3975 8.99523 10.3975 9.01641C10.3975 9.0323 10.3869 9.06407 10.3816 9.09584Z"
            fill="url(#paint63_linear)"></path>
        <path
            d="M8.89346 13.3799C9.15668 13.3799 9.37006 13.1666 9.37006 12.9034C9.37006 12.6401 9.15668 12.4268 8.89346 12.4268C8.63025 12.4268 8.41687 12.6401 8.41687 12.9034C8.41687 13.1666 8.63025 13.3799 8.89346 13.3799Z"
            fill="url(#paint64_radial)"></path>
        <path
            d="M13.9772 11.1133C14.2404 11.1133 14.4538 10.9 14.4538 10.6368C14.4538 10.3735 14.2404 10.1602 13.9772 10.1602C13.714 10.1602 13.5006 10.3735 13.5006 10.6368C13.5006 10.9 13.714 11.1133 13.9772 11.1133Z"
            fill="url(#paint65_radial)"></path>
        <path
            d="M12.288 14.3594C12.5512 14.3594 12.7646 14.1461 12.7646 13.8828C12.7646 13.6196 12.5512 13.4062 12.288 13.4062C12.0248 13.4062 11.8114 13.6196 11.8114 13.8828C11.8114 14.1461 12.0248 14.3594 12.288 14.3594Z"
            fill="url(#paint66_radial)"></path>
        <path
            d="M15.2533 13.6075C15.5165 13.6075 15.7299 13.3941 15.7299 13.1309C15.7299 12.8677 15.5165 12.6543 15.2533 12.6543C14.9901 12.6543 14.7767 12.8677 14.7767 13.1309C14.7767 13.3941 14.9901 13.6075 15.2533 13.6075Z"
            fill="url(#paint67_radial)"></path>
        <path
            d="M8.54398 16.1968C8.80719 16.1968 9.02057 15.9835 9.02057 15.7202C9.02057 15.457 8.80719 15.2437 8.54398 15.2437C8.28076 15.2437 8.06738 15.457 8.06738 15.7202C8.06738 15.9835 8.28076 16.1968 8.54398 16.1968Z"
            fill="url(#paint68_radial)"></path>
        <path
            d="M10.8739 18.5167C11.1371 18.5167 11.3505 18.3033 11.3505 18.0401C11.3505 17.7769 11.1371 17.5635 10.8739 17.5635C10.6107 17.5635 10.3973 17.7769 10.3973 18.0401C10.3973 18.3033 10.6107 18.5167 10.8739 18.5167Z"
            fill="url(#paint69_radial)"></path>
        <path opacity="0.24"
            d="M8.48584 15.2121C8.5335 15.2863 8.47525 15.4133 8.35345 15.4928C8.23165 15.5722 8.08868 15.5775 8.04102 15.5034C7.99336 15.4292 8.05161 15.3021 8.1734 15.2227C8.2952 15.1433 8.43288 15.138 8.48584 15.2121Z"
            fill="url(#paint70_radial)"></path>
        <path
            d="M8.42227 16.0806C8.68549 16.0806 8.89886 15.8672 8.89886 15.604C8.89886 15.3408 8.68549 15.1274 8.42227 15.1274C8.15906 15.1274 7.94568 15.3408 7.94568 15.604C7.94568 15.8672 8.15906 16.0806 8.42227 16.0806Z"
            fill="url(#paint71_radial)"></path>
        <path
            d="M8.42227 16.0806C8.68549 16.0806 8.89886 15.8672 8.89886 15.604C8.89886 15.3408 8.68549 15.1274 8.42227 15.1274C8.15906 15.1274 7.94568 15.3408 7.94568 15.604C7.94568 15.8672 8.15906 16.0806 8.42227 16.0806Z"
            fill="url(#paint72_radial)"></path>
        <path
            d="M8.42227 16.0806C8.68549 16.0806 8.89886 15.8672 8.89886 15.604C8.89886 15.3408 8.68549 15.1274 8.42227 15.1274C8.15906 15.1274 7.94568 15.3408 7.94568 15.604C7.94568 15.8672 8.15906 16.0806 8.42227 16.0806Z"
            fill="url(#paint73_radial)"></path>
        <path
            d="M8.42231 16.0806C8.60364 16.0806 8.75063 15.8672 8.75063 15.604C8.75063 15.3408 8.60364 15.1274 8.42231 15.1274C8.24099 15.1274 8.09399 15.3408 8.09399 15.604C8.09399 15.8672 8.24099 16.0806 8.42231 16.0806Z"
            fill="url(#paint74_linear)"></path>
        <path
            d="M8.50173 16.017C8.71815 16.017 8.8936 15.8321 8.8936 15.604C8.8936 15.3758 8.71815 15.1909 8.50173 15.1909C8.28531 15.1909 8.10986 15.3758 8.10986 15.604C8.10986 15.8321 8.28531 16.017 8.50173 16.017Z"
            fill="url(#paint75_linear)"></path>
        <path
            d="M8.43285 15.7628C8.31105 15.7628 8.15748 15.8052 8.07275 15.9323C8.15748 16.0276 8.28457 16.0858 8.42226 16.0858C8.68703 16.0858 8.89885 15.874 8.89885 15.6092C8.89885 15.5192 8.87237 15.4292 8.83001 15.3604C8.81412 15.6039 8.58641 15.7628 8.43285 15.7628Z"
            fill="url(#paint76_radial)"></path>
        <path
            d="M8.44877 15.1274C8.60234 15.2016 8.70825 15.3551 8.70825 15.5405C8.70825 15.7894 8.50702 15.9959 8.25284 15.9959C8.20518 15.9959 8.15752 15.9853 8.10986 15.9747C8.19459 16.0436 8.3005 16.0859 8.417 16.0859C8.68178 16.0859 8.89359 15.8741 8.89359 15.6093C8.90419 15.3499 8.70296 15.138 8.44877 15.1274Z"
            fill="url(#paint77_linear)"></path>
        <path
            d="M8.42227 16.0806C8.68549 16.0806 8.89886 15.8672 8.89886 15.604C8.89886 15.3408 8.68549 15.1274 8.42227 15.1274C8.15906 15.1274 7.94568 15.3408 7.94568 15.604C7.94568 15.8672 8.15906 16.0806 8.42227 16.0806Z"
            fill="url(#paint78_radial)"></path>
        <path
            d="M8.31628 15.0371V15.1218C8.31628 15.1483 8.32688 15.1642 8.34276 15.1642C8.35865 15.1642 8.36924 15.1536 8.37453 15.143C8.37453 15.1377 8.37983 15.1377 8.38513 15.143C8.39042 15.1589 8.40631 15.1695 8.42219 15.1695C8.43808 15.1695 8.45397 15.1589 8.45926 15.143C8.45926 15.1377 8.46456 15.1377 8.46985 15.143C8.47515 15.1589 8.48574 15.1642 8.50163 15.1642C8.52281 15.1642 8.5281 15.143 8.5281 15.1218V15.0371H8.31628Z"
            fill="url(#paint79_linear)"></path>
        <path opacity="0.75"
            d="M8.34811 15.0371C8.34811 15.0954 8.32163 15.1748 8.35341 15.1642C8.364 15.1589 8.36929 15.1536 8.37459 15.143C8.37459 15.1377 8.37988 15.1377 8.38518 15.143C8.39048 15.1483 8.39048 15.1536 8.39577 15.1589C8.39048 15.1271 8.39048 15.053 8.39577 15.0371H8.34811Z"
            fill="url(#paint80_linear)"></path>
        <path
            d="M8.42224 15.0585C8.48366 15.0585 8.53344 15.049 8.53344 15.0373C8.53344 15.0256 8.48366 15.0161 8.42224 15.0161C8.36082 15.0161 8.31104 15.0256 8.31104 15.0373C8.31104 15.049 8.36082 15.0585 8.42224 15.0585Z"
            fill="url(#paint81_linear)"></path>
        <path
            d="M8.42224 15.0585C8.48366 15.0585 8.53344 15.049 8.53344 15.0373C8.53344 15.0256 8.48366 15.0161 8.42224 15.0161C8.36082 15.0161 8.31104 15.0256 8.31104 15.0373C8.31104 15.049 8.36082 15.0585 8.42224 15.0585Z"
            fill="url(#paint82_linear)"></path>
        <path
            d="M8.42754 15.0373H8.42225H8.41695C8.41695 15.0214 8.40636 14.979 8.39577 14.942C8.38518 14.9049 8.37988 14.8731 8.37988 14.8572C8.37988 14.8255 8.40107 14.8096 8.42225 14.8096C8.44343 14.8096 8.46461 14.8255 8.46461 14.8572C8.46461 14.8731 8.45402 14.9049 8.44873 14.942C8.43813 14.9843 8.42754 15.0214 8.42754 15.0373ZM8.42225 14.8255C8.40636 14.8255 8.39047 14.8413 8.39047 14.8625C8.39047 14.8731 8.40107 14.9102 8.40636 14.942C8.41166 14.9631 8.41695 14.9843 8.42225 15.0002C8.42754 14.9843 8.43284 14.9631 8.43813 14.942C8.44873 14.9102 8.45402 14.8731 8.45402 14.8625C8.45402 14.836 8.43813 14.8255 8.42225 14.8255Z"
            fill="url(#paint83_linear)"></path>
        <path
            d="M8.42225 14.8149C8.40107 14.8149 8.37988 14.8308 8.37988 14.8626C8.37988 14.8785 8.39047 14.9103 8.39577 14.9473C8.40636 14.9844 8.41695 15.0215 8.41695 15.0426C8.41695 15.0426 8.41695 15.0426 8.42225 15.0426C8.42754 15.0426 8.42754 15.0426 8.42754 15.0426C8.42754 15.0268 8.43813 14.9844 8.44873 14.9473C8.45932 14.9103 8.46461 14.8785 8.46461 14.8626C8.46461 14.8308 8.44343 14.8149 8.42225 14.8149ZM8.43813 14.942C8.43284 14.9632 8.42754 14.9844 8.42225 15.0003C8.41695 14.9844 8.41166 14.9632 8.40636 14.942C8.39577 14.9103 8.39047 14.8732 8.39047 14.8626C8.39047 14.8361 8.40636 14.8255 8.42225 14.8255C8.43813 14.8255 8.45402 14.8414 8.45402 14.8626C8.45402 14.8785 8.44873 14.9103 8.43813 14.942Z"
            fill="url(#paint84_linear)"></path>
        <path opacity="0.24"
            d="M12.2296 13.3747C12.2773 13.4488 12.219 13.5759 12.0972 13.6554C11.9754 13.7348 11.8325 13.7401 11.7848 13.666C11.7371 13.5918 11.7954 13.4647 11.9172 13.3853C12.039 13.3059 12.1767 13.3006 12.2296 13.3747Z"
            fill="url(#paint85_radial)"></path>
        <path
            d="M12.166 14.2432C12.4293 14.2432 12.6426 14.0298 12.6426 13.7666C12.6426 13.5034 12.4293 13.29 12.166 13.29C11.9028 13.29 11.6895 13.5034 11.6895 13.7666C11.6895 14.0298 11.9028 14.2432 12.166 14.2432Z"
            fill="url(#paint86_radial)"></path>
        <path
            d="M12.166 14.2432C12.4293 14.2432 12.6426 14.0298 12.6426 13.7666C12.6426 13.5034 12.4293 13.29 12.166 13.29C11.9028 13.29 11.6895 13.5034 11.6895 13.7666C11.6895 14.0298 11.9028 14.2432 12.166 14.2432Z"
            fill="url(#paint87_radial)"></path>
        <path
            d="M12.166 14.2432C12.4293 14.2432 12.6426 14.0298 12.6426 13.7666C12.6426 13.5034 12.4293 13.29 12.166 13.29C11.9028 13.29 11.6895 13.5034 11.6895 13.7666C11.6895 14.0298 11.9028 14.2432 12.166 14.2432Z"
            fill="url(#paint88_radial)"></path>
        <path
            d="M12.1661 14.2432C12.3474 14.2432 12.4944 14.0298 12.4944 13.7666C12.4944 13.5034 12.3474 13.29 12.1661 13.29C11.9848 13.29 11.8378 13.5034 11.8378 13.7666C11.8378 14.0298 11.9848 14.2432 12.1661 14.2432Z"
            fill="url(#paint89_linear)"></path>
        <path
            d="M12.2455 14.1796C12.4619 14.1796 12.6374 13.9947 12.6374 13.7666C12.6374 13.5384 12.4619 13.3535 12.2455 13.3535C12.0291 13.3535 11.8536 13.5384 11.8536 13.7666C11.8536 13.9947 12.0291 14.1796 12.2455 14.1796Z"
            fill="url(#paint90_linear)"></path>
        <path
            d="M12.1766 13.9254C12.0548 13.9254 11.9013 13.9678 11.8165 14.0949C11.9013 14.1902 12.0283 14.2484 12.166 14.2484C12.4308 14.2484 12.6426 14.0366 12.6426 13.7718C12.6426 13.6818 12.6161 13.5918 12.5738 13.5229C12.5579 13.7665 12.3302 13.9254 12.1766 13.9254Z"
            fill="url(#paint91_radial)"></path>
        <path
            d="M12.1925 13.29C12.3461 13.3642 12.452 13.5177 12.452 13.7031C12.452 13.952 12.2508 14.1585 11.9966 14.1585C11.949 14.1585 11.9013 14.1479 11.8536 14.1373C11.9384 14.2062 12.0443 14.2485 12.1608 14.2485C12.4255 14.2485 12.6374 14.0367 12.6374 13.7719C12.6427 13.5124 12.4467 13.3006 12.1925 13.29Z"
            fill="url(#paint92_linear)"></path>
        <path
            d="M12.166 14.2432C12.4293 14.2432 12.6426 14.0298 12.6426 13.7666C12.6426 13.5034 12.4293 13.29 12.166 13.29C11.9028 13.29 11.6895 13.5034 11.6895 13.7666C11.6895 14.0298 11.9028 14.2432 12.166 14.2432Z"
            fill="url(#paint93_radial)"></path>
        <path
            d="M12.0601 13.1997V13.2844C12.0601 13.3109 12.0706 13.3268 12.0865 13.3268C12.1024 13.3268 12.113 13.3162 12.1183 13.3056C12.1183 13.3003 12.1236 13.3003 12.1289 13.3056C12.1342 13.3215 12.1501 13.3321 12.166 13.3321C12.1819 13.3321 12.1977 13.3215 12.203 13.3056C12.203 13.3003 12.2083 13.3003 12.2136 13.3056C12.2189 13.3215 12.2295 13.3268 12.2454 13.3268C12.2666 13.3268 12.2719 13.3056 12.2719 13.2844V13.1997H12.0601Z"
            fill="url(#paint94_linear)"></path>
        <path opacity="0.75"
            d="M12.0919 13.1997C12.0919 13.258 12.0654 13.3374 12.0972 13.3268C12.1078 13.3215 12.1131 13.3162 12.1184 13.3056C12.1184 13.3003 12.1237 13.3003 12.129 13.3056C12.1342 13.3109 12.1342 13.3162 12.1395 13.3215C12.1342 13.2897 12.1342 13.2156 12.1395 13.1997H12.0919Z"
            fill="url(#paint95_linear)"></path>
        <path
            d="M12.166 13.2211C12.2274 13.2211 12.2772 13.2116 12.2772 13.1999C12.2772 13.1882 12.2274 13.1787 12.166 13.1787C12.1046 13.1787 12.0548 13.1882 12.0548 13.1999C12.0548 13.2116 12.1046 13.2211 12.166 13.2211Z"
            fill="url(#paint96_linear)"></path>
        <path
            d="M12.166 13.2211C12.2274 13.2211 12.2772 13.2116 12.2772 13.1999C12.2772 13.1882 12.2274 13.1787 12.166 13.1787C12.1046 13.1787 12.0548 13.1882 12.0548 13.1999C12.0548 13.2116 12.1046 13.2211 12.166 13.2211Z"
            fill="url(#paint97_linear)"></path>
        <path
            d="M12.1713 13.1999H12.166H12.1607C12.1607 13.184 12.1501 13.1416 12.1395 13.1046C12.129 13.0675 12.1237 13.0357 12.1237 13.0198C12.1237 12.9881 12.1448 12.9722 12.166 12.9722C12.1872 12.9722 12.2084 12.9881 12.2084 13.0198C12.2084 13.0357 12.1978 13.0675 12.1925 13.1046C12.1819 13.1469 12.1713 13.184 12.1713 13.1999ZM12.166 12.9881C12.1501 12.9881 12.1342 13.0039 12.1342 13.0251C12.1342 13.0357 12.1448 13.0728 12.1501 13.1046C12.1554 13.1257 12.1607 13.1469 12.166 13.1628C12.1713 13.1469 12.1766 13.1257 12.1819 13.1046C12.1925 13.0728 12.1978 13.0357 12.1978 13.0251C12.1978 12.9986 12.1819 12.9881 12.166 12.9881Z"
            fill="url(#paint98_linear)"></path>
        <path
            d="M12.166 12.9775C12.1448 12.9775 12.1237 12.9934 12.1237 13.0252C12.1237 13.0411 12.1342 13.0729 12.1395 13.1099C12.1501 13.147 12.1607 13.1841 12.1607 13.2052C12.1607 13.2052 12.1607 13.2052 12.166 13.2052C12.1713 13.2052 12.1713 13.2052 12.1713 13.2052C12.1713 13.1894 12.1819 13.147 12.1925 13.1099C12.2031 13.0729 12.2084 13.0411 12.2084 13.0252C12.2084 12.9934 12.1872 12.9775 12.166 12.9775ZM12.1819 13.1046C12.1766 13.1258 12.1713 13.147 12.166 13.1629C12.1607 13.147 12.1554 13.1258 12.1501 13.1046C12.1395 13.0729 12.1342 13.0358 12.1342 13.0252C12.1342 12.9987 12.1501 12.9881 12.166 12.9881C12.1819 12.9881 12.1978 13.004 12.1978 13.0252C12.1978 13.0411 12.1925 13.0729 12.1819 13.1046Z"
            fill="url(#paint99_linear)"></path>
        <path
            d="M13.8607 10.9971C14.124 10.9971 14.3373 10.7838 14.3373 10.5205C14.3373 10.2573 14.124 10.0439 13.8607 10.0439C13.5975 10.0439 13.3842 10.2573 13.3842 10.5205C13.3842 10.7838 13.5975 10.9971 13.8607 10.9971Z"
            fill="url(#paint100_radial)"></path>
        <path
            d="M13.8607 10.9971C14.124 10.9971 14.3373 10.7838 14.3373 10.5205C14.3373 10.2573 14.124 10.0439 13.8607 10.0439C13.5975 10.0439 13.3842 10.2573 13.3842 10.5205C13.3842 10.7838 13.5975 10.9971 13.8607 10.9971Z"
            fill="url(#paint101_radial)"></path>
        <path
            d="M13.8607 10.9971C14.124 10.9971 14.3373 10.7838 14.3373 10.5205C14.3373 10.2573 14.124 10.0439 13.8607 10.0439C13.5975 10.0439 13.3842 10.2573 13.3842 10.5205C13.3842 10.7838 13.5975 10.9971 13.8607 10.9971Z"
            fill="url(#paint102_radial)"></path>
        <path
            d="M13.8608 10.9971C14.0421 10.9971 14.1891 10.7838 14.1891 10.5205C14.1891 10.2573 14.0421 10.0439 13.8608 10.0439C13.6795 10.0439 13.5325 10.2573 13.5325 10.5205C13.5325 10.7838 13.6795 10.9971 13.8608 10.9971Z"
            fill="url(#paint103_linear)"></path>
        <path
            d="M13.935 10.9335C14.1514 10.9335 14.3268 10.7486 14.3268 10.5205C14.3268 10.2923 14.1514 10.1074 13.935 10.1074C13.7185 10.1074 13.5431 10.2923 13.5431 10.5205C13.5431 10.7486 13.7185 10.9335 13.935 10.9335Z"
            fill="url(#paint104_linear)"></path>
        <path
            d="M13.8661 10.6793C13.7443 10.6793 13.5907 10.7217 13.506 10.8488C13.5907 10.9441 13.7178 11.0023 13.8555 11.0023C14.1203 11.0023 14.3321 10.7905 14.3321 10.5257C14.3321 10.4357 14.3056 10.3457 14.2632 10.2769C14.2473 10.5204 14.0249 10.6793 13.8661 10.6793Z"
            fill="url(#paint105_radial)"></path>
        <path
            d="M13.8873 10.0439C14.0408 10.1181 14.1467 10.2717 14.1467 10.457C14.1467 10.7059 13.9455 10.9124 13.6913 10.9124C13.6437 10.9124 13.596 10.9018 13.5483 10.8912C13.6331 10.9601 13.739 11.0024 13.8555 11.0024C14.1203 11.0024 14.3321 10.7906 14.3321 10.5258C14.3374 10.2664 14.1361 10.0545 13.8873 10.0439Z"
            fill="url(#paint106_linear)"></path>
        <path
            d="M13.8607 10.9971C14.124 10.9971 14.3373 10.7838 14.3373 10.5205C14.3373 10.2573 14.124 10.0439 13.8607 10.0439C13.5975 10.0439 13.3842 10.2573 13.3842 10.5205C13.3842 10.7838 13.5975 10.9971 13.8607 10.9971Z"
            fill="url(#paint107_radial)"></path>
        <path opacity="0.48"
            d="M13.9191 10.1286C13.9667 10.2028 13.9085 10.3298 13.7867 10.4093C13.6649 10.4887 13.5219 10.494 13.4742 10.4199C13.4266 10.3457 13.4848 10.2186 13.6066 10.1392C13.7284 10.0598 13.8714 10.0545 13.9191 10.1286Z"
            fill="url(#paint108_radial)"></path>
        <path
            d="M13.7495 9.9541V10.0388C13.7495 10.0653 13.7601 10.0812 13.776 10.0812C13.7919 10.0812 13.8025 10.0706 13.8078 10.06C13.8078 10.0547 13.8131 10.0547 13.8184 10.06C13.8236 10.0759 13.8395 10.0865 13.8554 10.0865C13.8713 10.0865 13.8872 10.0759 13.8925 10.06C13.8925 10.0547 13.8978 10.0547 13.9031 10.06C13.9084 10.0759 13.919 10.0812 13.9349 10.0812C13.956 10.0812 13.9613 10.06 13.9613 10.0388V9.9541H13.7495Z"
            fill="url(#paint109_linear)"></path>
        <path opacity="0.75"
            d="M13.7813 9.9541C13.7813 10.0124 13.7549 10.0918 13.7866 10.0812C13.7972 10.0759 13.8025 10.0706 13.8078 10.06C13.8078 10.0547 13.8131 10.0547 13.8184 10.06C13.8237 10.0653 13.8237 10.0706 13.829 10.0759C13.8237 10.0441 13.8237 9.96999 13.829 9.9541H13.7813Z"
            fill="url(#paint110_linear)"></path>
        <path
            d="M13.8607 9.97498C13.9221 9.97498 13.9719 9.9655 13.9719 9.9538C13.9719 9.9421 13.9221 9.93262 13.8607 9.93262C13.7993 9.93262 13.7495 9.9421 13.7495 9.9538C13.7495 9.9655 13.7993 9.97498 13.8607 9.97498Z"
            fill="url(#paint111_linear)"></path>
        <path
            d="M13.8607 9.97498C13.9221 9.97498 13.9719 9.9655 13.9719 9.9538C13.9719 9.9421 13.9221 9.93262 13.8607 9.93262C13.7993 9.93262 13.7495 9.9421 13.7495 9.9538C13.7495 9.9655 13.7993 9.97498 13.8607 9.97498Z"
            fill="url(#paint112_linear)"></path>
        <path
            d="M13.866 9.95378H13.8607H13.8554C13.8554 9.93789 13.8448 9.89553 13.8342 9.85846C13.8237 9.82139 13.8184 9.78962 13.8184 9.77373C13.8184 9.74196 13.8395 9.72607 13.8607 9.72607C13.8819 9.72607 13.9031 9.74196 13.9031 9.77373C13.9031 9.78962 13.8925 9.82139 13.8872 9.85846C13.8766 9.90083 13.866 9.93789 13.866 9.95378ZM13.8607 9.74196C13.8448 9.74196 13.829 9.75785 13.829 9.77903C13.829 9.78962 13.8395 9.82669 13.8448 9.85846C13.8501 9.87964 13.8554 9.90083 13.8607 9.91671C13.866 9.90083 13.8713 9.87964 13.8766 9.85846C13.8872 9.82669 13.8925 9.78962 13.8925 9.77903C13.8925 9.75255 13.8766 9.74196 13.8607 9.74196Z"
            fill="url(#paint113_linear)"></path>
        <path
            d="M13.8607 9.73145C13.8395 9.73145 13.8184 9.74733 13.8184 9.7791C13.8184 9.79499 13.829 9.82676 13.8342 9.86383C13.8448 9.9009 13.8554 9.93797 13.8554 9.95915C13.8554 9.95915 13.8554 9.95915 13.8607 9.95915C13.866 9.95915 13.866 9.95915 13.866 9.95915C13.866 9.94326 13.8766 9.9009 13.8872 9.86383C13.8978 9.82676 13.9031 9.79499 13.9031 9.7791C13.9031 9.74733 13.8819 9.73145 13.8607 9.73145ZM13.8766 9.85854C13.8713 9.87972 13.866 9.9009 13.8607 9.91679C13.8554 9.9009 13.8501 9.87972 13.8448 9.85854C13.8342 9.82676 13.829 9.7897 13.829 9.7791C13.829 9.75263 13.8448 9.74204 13.8607 9.74204C13.8766 9.74204 13.8925 9.75792 13.8925 9.7791C13.8925 9.7897 13.8819 9.82676 13.8766 9.85854Z"
            fill="url(#paint114_linear)"></path>
        <path
            d="M10.7522 18.3941C11.0154 18.3941 11.2288 18.1807 11.2288 17.9175C11.2288 17.6543 11.0154 17.4409 10.7522 17.4409C10.489 17.4409 10.2756 17.6543 10.2756 17.9175C10.2756 18.1807 10.489 18.3941 10.7522 18.3941Z"
            fill="url(#paint115_radial)"></path>
        <path
            d="M10.7522 18.3941C11.0154 18.3941 11.2288 18.1807 11.2288 17.9175C11.2288 17.6543 11.0154 17.4409 10.7522 17.4409C10.489 17.4409 10.2756 17.6543 10.2756 17.9175C10.2756 18.1807 10.489 18.3941 10.7522 18.3941Z"
            fill="url(#paint116_radial)"></path>
        <path
            d="M10.7522 18.3941C11.0154 18.3941 11.2288 18.1807 11.2288 17.9175C11.2288 17.6543 11.0154 17.4409 10.7522 17.4409C10.489 17.4409 10.2756 17.6543 10.2756 17.9175C10.2756 18.1807 10.489 18.3941 10.7522 18.3941Z"
            fill="url(#paint117_radial)"></path>
        <path
            d="M10.7523 18.3941C10.9336 18.3941 11.0806 18.1807 11.0806 17.9175C11.0806 17.6543 10.9336 17.4409 10.7523 17.4409C10.5709 17.4409 10.424 17.6543 10.424 17.9175C10.424 18.1807 10.5709 18.3941 10.7523 18.3941Z"
            fill="url(#paint118_linear)"></path>
        <path
            d="M10.8316 18.3305C11.048 18.3305 11.2234 18.1456 11.2234 17.9174C11.2234 17.6893 11.048 17.5044 10.8316 17.5044C10.6151 17.5044 10.4397 17.6893 10.4397 17.9174C10.4397 18.1456 10.6151 18.3305 10.8316 18.3305Z"
            fill="url(#paint119_linear)"></path>
        <path
            d="M10.7628 18.0763C10.641 18.0763 10.4874 18.1186 10.4027 18.2457C10.4874 18.3411 10.6145 18.3993 10.7522 18.3993C11.017 18.3993 11.2288 18.1875 11.2288 17.9227C11.2288 17.8327 11.2023 17.7427 11.16 17.6738C11.1441 17.9227 10.9164 18.0763 10.7628 18.0763Z"
            fill="url(#paint120_radial)"></path>
        <path
            d="M10.7786 17.4409C10.9322 17.5151 11.0381 17.6686 11.0381 17.854C11.0381 18.1029 10.8369 18.3094 10.5827 18.3094C10.535 18.3094 10.4874 18.2988 10.4397 18.2882C10.5244 18.357 10.6303 18.3994 10.7468 18.3994C11.0116 18.3994 11.2234 18.1876 11.2234 17.9228C11.234 17.6633 11.0328 17.4568 10.7786 17.4409Z"
            fill="url(#paint121_linear)"></path>
        <path
            d="M10.7522 18.3941C11.0154 18.3941 11.2288 18.1807 11.2288 17.9175C11.2288 17.6543 11.0154 17.4409 10.7522 17.4409C10.489 17.4409 10.2756 17.6543 10.2756 17.9175C10.2756 18.1807 10.489 18.3941 10.7522 18.3941Z"
            fill="url(#paint122_radial)"></path>
        <path opacity="0.48"
            d="M10.8158 17.5256C10.8635 17.5997 10.8052 17.7268 10.6834 17.8063C10.5616 17.8857 10.4186 17.891 10.371 17.8168C10.3233 17.7427 10.3816 17.6156 10.5034 17.5362C10.6252 17.4568 10.7681 17.4515 10.8158 17.5256Z"
            fill="url(#paint123_radial)"></path>
        <path
            d="M10.6462 17.3569V17.4417C10.6462 17.4681 10.6568 17.484 10.6727 17.484C10.6886 17.484 10.6992 17.4734 10.7045 17.4628C10.7045 17.4575 10.7098 17.4575 10.7151 17.4628C10.7204 17.4787 10.7363 17.4893 10.7522 17.4893C10.768 17.4893 10.7839 17.4787 10.7892 17.4628C10.7892 17.4575 10.7945 17.4575 10.7998 17.4628C10.8051 17.4787 10.8157 17.484 10.8316 17.484C10.8528 17.484 10.8581 17.4628 10.8581 17.4417V17.3569H10.6462Z"
            fill="url(#paint124_linear)"></path>
        <path opacity="0.75"
            d="M10.6781 17.3569C10.6781 17.4152 10.6516 17.4946 10.6834 17.484C10.694 17.4787 10.6992 17.4734 10.7045 17.4628C10.7045 17.4575 10.7098 17.4575 10.7151 17.4628C10.7204 17.4681 10.7204 17.4734 10.7257 17.4787C10.7204 17.447 10.7204 17.3728 10.7257 17.3569H10.6781Z"
            fill="url(#paint125_linear)"></path>
        <path
            d="M10.7522 17.3778C10.8136 17.3778 10.8634 17.3683 10.8634 17.3566C10.8634 17.3449 10.8136 17.3354 10.7522 17.3354C10.6908 17.3354 10.641 17.3449 10.641 17.3566C10.641 17.3683 10.6908 17.3778 10.7522 17.3778Z"
            fill="url(#paint126_linear)"></path>
        <path
            d="M10.7522 17.3778C10.8136 17.3778 10.8634 17.3683 10.8634 17.3566C10.8634 17.3449 10.8136 17.3354 10.7522 17.3354C10.6908 17.3354 10.641 17.3449 10.641 17.3566C10.641 17.3683 10.6908 17.3778 10.7522 17.3778Z"
            fill="url(#paint127_linear)"></path>
        <path
            d="M10.7575 17.3566H10.7522H10.7469C10.7469 17.3407 10.7363 17.2984 10.7257 17.2613C10.7151 17.2242 10.7098 17.1925 10.7098 17.1766C10.7098 17.1448 10.731 17.1289 10.7522 17.1289C10.7734 17.1289 10.7946 17.1448 10.7946 17.1766C10.7946 17.1925 10.784 17.2242 10.7787 17.2613C10.7681 17.2984 10.7575 17.3407 10.7575 17.3566ZM10.7522 17.1395C10.7363 17.1395 10.7204 17.1554 10.7204 17.1766C10.7204 17.1872 10.731 17.2242 10.7363 17.256C10.7416 17.2772 10.7469 17.2984 10.7522 17.3142C10.7575 17.2984 10.7628 17.2772 10.7681 17.256C10.7787 17.2242 10.784 17.1872 10.784 17.1766C10.784 17.1554 10.7681 17.1395 10.7522 17.1395Z"
            fill="url(#paint128_linear)"></path>
        <path
            d="M10.7522 17.1289C10.731 17.1289 10.7098 17.1448 10.7098 17.1766C10.7098 17.1925 10.7204 17.2242 10.7257 17.2613C10.7363 17.2984 10.7469 17.3354 10.7469 17.3566C10.7469 17.3566 10.7469 17.3566 10.7522 17.3566C10.7575 17.3566 10.7575 17.3566 10.7575 17.3566C10.7575 17.3407 10.7681 17.2984 10.7787 17.2613C10.7893 17.2242 10.7946 17.1925 10.7946 17.1766C10.7946 17.1448 10.7734 17.1289 10.7522 17.1289ZM10.7681 17.2613C10.7628 17.2825 10.7575 17.3037 10.7522 17.3195C10.7469 17.3037 10.7416 17.2825 10.7363 17.2613C10.7257 17.2295 10.7204 17.1925 10.7204 17.1819C10.7204 17.1554 10.7363 17.1448 10.7522 17.1448C10.7681 17.1448 10.784 17.1607 10.784 17.1819C10.784 17.1925 10.7787 17.2242 10.7681 17.2613Z"
            fill="url(#paint129_linear)"></path>
        <path
            d="M8.77164 13.2632C9.03485 13.2632 9.24823 13.0499 9.24823 12.7867C9.24823 12.5234 9.03485 12.3101 8.77164 12.3101C8.50842 12.3101 8.29504 12.5234 8.29504 12.7867C8.29504 13.0499 8.50842 13.2632 8.77164 13.2632Z"
            fill="url(#paint130_radial)"></path>
        <path
            d="M8.77164 13.2632C9.03485 13.2632 9.24823 13.0499 9.24823 12.7867C9.24823 12.5234 9.03485 12.3101 8.77164 12.3101C8.50842 12.3101 8.29504 12.5234 8.29504 12.7867C8.29504 13.0499 8.50842 13.2632 8.77164 13.2632Z"
            fill="url(#paint131_radial)"></path>
        <path
            d="M8.77164 13.2632C9.03485 13.2632 9.24823 13.0499 9.24823 12.7867C9.24823 12.5234 9.03485 12.3101 8.77164 12.3101C8.50842 12.3101 8.29504 12.5234 8.29504 12.7867C8.29504 13.0499 8.50842 13.2632 8.77164 13.2632Z"
            fill="url(#paint132_radial)"></path>
        <path
            d="M8.77156 13.2632C8.95288 13.2632 9.09988 13.0499 9.09988 12.7867C9.09988 12.5234 8.95288 12.3101 8.77156 12.3101C8.59023 12.3101 8.44324 12.5234 8.44324 12.7867C8.44324 13.0499 8.59023 13.2632 8.77156 13.2632Z"
            fill="url(#paint133_linear)"></path>
        <path
            d="M8.85109 13.1996C9.06751 13.1996 9.24296 13.0147 9.24296 12.7866C9.24296 12.5585 9.06751 12.3735 8.85109 12.3735C8.63467 12.3735 8.45923 12.5585 8.45923 12.7866C8.45923 13.0147 8.63467 13.1996 8.85109 13.1996Z"
            fill="url(#paint134_linear)"></path>
        <path
            d="M8.78221 12.9454C8.66042 12.9454 8.50685 12.9878 8.42212 13.1149C8.50685 13.2102 8.63394 13.2684 8.77162 13.2684C9.0364 13.2684 9.24821 13.0566 9.24821 12.7919C9.24821 12.7018 9.22174 12.6118 9.17937 12.543C9.16349 12.7866 8.93578 12.9454 8.78221 12.9454Z"
            fill="url(#paint135_radial)"></path>
        <path
            d="M8.79814 12.3101C8.95171 12.3842 9.05762 12.5378 9.05762 12.7231C9.05762 12.972 8.85639 13.1785 8.60221 13.1785C8.55455 13.1785 8.50689 13.1679 8.45923 13.1573C8.54396 13.2262 8.64987 13.2685 8.76637 13.2685C9.03114 13.2685 9.24296 13.0567 9.24296 12.7919C9.25355 12.5325 9.05232 12.3206 8.79814 12.3101Z"
            fill="url(#paint136_linear)"></path>
        <path
            d="M8.77164 13.2632C9.03485 13.2632 9.24823 13.0499 9.24823 12.7867C9.24823 12.5234 9.03485 12.3101 8.77164 12.3101C8.50842 12.3101 8.29504 12.5234 8.29504 12.7867C8.29504 13.0499 8.50842 13.2632 8.77164 13.2632Z"
            fill="url(#paint137_radial)"></path>
        <path opacity="0.48"
            d="M8.8352 12.3947C8.88286 12.4689 8.82461 12.596 8.70282 12.6754C8.58102 12.7548 8.43804 12.7601 8.39038 12.686C8.34272 12.6118 8.40097 12.4848 8.52277 12.4053C8.64457 12.3259 8.78225 12.3206 8.8352 12.3947Z"
            fill="url(#paint138_radial)"></path>
        <path
            d="M8.66565 12.2202V12.3049C8.66565 12.3314 8.67624 12.3473 8.69213 12.3473C8.70801 12.3473 8.7186 12.3367 8.7239 12.3261C8.7239 12.3208 8.7292 12.3208 8.73449 12.3261C8.73979 12.342 8.75567 12.3526 8.77156 12.3526C8.78745 12.3526 8.80333 12.342 8.80863 12.3261C8.80863 12.3208 8.81392 12.3208 8.81922 12.3261C8.82451 12.342 8.83511 12.3473 8.85099 12.3473C8.87217 12.3473 8.87747 12.3261 8.87747 12.3049V12.2202H8.66565Z"
            fill="url(#paint139_linear)"></path>
        <path opacity="0.75"
            d="M8.69748 12.2202C8.69748 12.2785 8.671 12.3579 8.70277 12.3473C8.71336 12.342 8.71866 12.3367 8.72395 12.3261C8.72395 12.3208 8.72925 12.3208 8.73455 12.3261C8.73984 12.3314 8.73984 12.3367 8.74514 12.342C8.73984 12.3102 8.73984 12.2361 8.74514 12.2202H8.69748Z"
            fill="url(#paint140_linear)"></path>
        <path
            d="M8.77161 12.2411C8.83302 12.2411 8.88281 12.2316 8.88281 12.2199C8.88281 12.2082 8.83302 12.1987 8.77161 12.1987C8.71019 12.1987 8.6604 12.2082 8.6604 12.2199C8.6604 12.2316 8.71019 12.2411 8.77161 12.2411Z"
            fill="url(#paint141_linear)"></path>
        <path
            d="M8.77161 12.2411C8.83302 12.2411 8.88281 12.2316 8.88281 12.2199C8.88281 12.2082 8.83302 12.1987 8.77161 12.1987C8.71019 12.1987 8.6604 12.2082 8.6604 12.2199C8.6604 12.2316 8.71019 12.2411 8.77161 12.2411Z"
            fill="url(#paint142_linear)"></path>
        <path
            d="M8.77691 12.2199H8.77161H8.76632C8.76632 12.204 8.75573 12.1616 8.74513 12.1246C8.73454 12.0875 8.72925 12.0557 8.72925 12.0398C8.72925 12.0081 8.75043 11.9922 8.77161 11.9922C8.79279 11.9922 8.81398 12.0081 8.81398 12.0398C8.81398 12.0557 8.80339 12.0875 8.79809 12.1246C8.7875 12.1669 8.77691 12.204 8.77691 12.2199ZM8.77161 12.0081C8.75573 12.0081 8.73984 12.024 8.73984 12.0451C8.73984 12.0557 8.75043 12.0928 8.75573 12.1246C8.76102 12.1458 8.76632 12.1669 8.77161 12.1828C8.77691 12.1669 8.7822 12.1458 8.7875 12.1246C8.79809 12.0928 8.80339 12.0557 8.80339 12.0451C8.80339 12.0187 8.7875 12.0081 8.77161 12.0081Z"
            fill="url(#paint143_linear)"></path>
        <path
            d="M8.77161 11.9976C8.75043 11.9976 8.72925 12.0134 8.72925 12.0452C8.72925 12.0611 8.73984 12.0929 8.74513 12.1299C8.75573 12.167 8.76632 12.2041 8.76632 12.2253C8.76632 12.2253 8.76632 12.2253 8.77161 12.2253C8.77691 12.2253 8.77691 12.2253 8.77691 12.2253C8.77691 12.2094 8.7875 12.167 8.79809 12.1299C8.80868 12.0929 8.81398 12.0611 8.81398 12.0452C8.81398 12.0134 8.79279 11.9976 8.77161 11.9976ZM8.7875 12.1247C8.7822 12.1458 8.77691 12.167 8.77161 12.1829C8.76632 12.167 8.76102 12.1458 8.75573 12.1247C8.74513 12.0929 8.73984 12.0558 8.73984 12.0452C8.73984 12.0187 8.75573 12.0082 8.77161 12.0082C8.7875 12.0082 8.80339 12.024 8.80339 12.0452C8.80339 12.0558 8.79809 12.0929 8.7875 12.1247Z"
            fill="url(#paint144_linear)"></path>
        <path
            d="M10.3656 10.2344C10.6288 10.2344 10.8422 10.0211 10.8422 9.75784C10.8422 9.49463 10.6288 9.28125 10.3656 9.28125C10.1024 9.28125 9.88904 9.49463 9.88904 9.75784C9.88904 10.0211 10.1024 10.2344 10.3656 10.2344Z"
            fill="url(#paint145_radial)"></path>
        <path
            d="M10.3656 10.2344C10.6288 10.2344 10.8422 10.0211 10.8422 9.75784C10.8422 9.49463 10.6288 9.28125 10.3656 9.28125C10.1024 9.28125 9.88904 9.49463 9.88904 9.75784C9.88904 10.0211 10.1024 10.2344 10.3656 10.2344Z"
            fill="url(#paint146_radial)"></path>
        <path
            d="M10.3656 10.2344C10.6288 10.2344 10.8422 10.0211 10.8422 9.75784C10.8422 9.49463 10.6288 9.28125 10.3656 9.28125C10.1024 9.28125 9.88904 9.49463 9.88904 9.75784C9.88904 10.0211 10.1024 10.2344 10.3656 10.2344Z"
            fill="url(#paint147_radial)"></path>
        <path
            d="M10.3657 10.2344C10.547 10.2344 10.694 10.0211 10.694 9.75784C10.694 9.49463 10.547 9.28125 10.3657 9.28125C10.1843 9.28125 10.0374 9.49463 10.0374 9.75784C10.0374 10.0211 10.1843 10.2344 10.3657 10.2344Z"
            fill="url(#paint148_linear)"></path>
        <path
            d="M10.445 10.1708C10.6614 10.1708 10.8368 9.98589 10.8368 9.75777C10.8368 9.52965 10.6614 9.34473 10.445 9.34473C10.2285 9.34473 10.0531 9.52965 10.0531 9.75777C10.0531 9.98589 10.2285 10.1708 10.445 10.1708Z"
            fill="url(#paint149_linear)"></path>
        <path
            d="M10.3762 9.91662C10.2544 9.91662 10.1008 9.95898 10.0161 10.0861C10.1008 10.1814 10.2279 10.2396 10.3656 10.2396C10.6304 10.2396 10.8422 10.0278 10.8422 9.76305C10.8422 9.67302 10.8157 9.583 10.7734 9.51416C10.7575 9.75775 10.5298 9.91662 10.3762 9.91662Z"
            fill="url(#paint150_radial)"></path>
        <path
            d="M10.392 9.28125C10.5456 9.35539 10.6515 9.50896 10.6515 9.6943C10.6515 9.94318 10.4503 10.1497 10.1961 10.1497C10.1484 10.1497 10.1008 10.1391 10.0531 10.1285C10.1378 10.1974 10.2437 10.2397 10.3602 10.2397C10.625 10.2397 10.8368 10.0279 10.8368 9.76314C10.8421 9.50366 10.6409 9.29184 10.392 9.28125Z"
            fill="url(#paint151_linear)"></path>
        <path
            d="M10.3656 10.2344C10.6288 10.2344 10.8422 10.0211 10.8422 9.75784C10.8422 9.49463 10.6288 9.28125 10.3656 9.28125C10.1024 9.28125 9.88904 9.49463 9.88904 9.75784C9.88904 10.0211 10.1024 10.2344 10.3656 10.2344Z"
            fill="url(#paint152_radial)"></path>
        <path opacity="0.48"
            d="M10.4238 9.36592C10.4715 9.44006 10.4132 9.56715 10.2914 9.64658C10.1696 9.72601 10.0267 9.73131 9.97901 9.65717C9.93135 9.58304 9.9896 9.45595 10.1114 9.37651C10.2332 9.29708 10.3762 9.29179 10.4238 9.36592Z"
            fill="url(#paint153_radial)"></path>
        <path
            d="M10.2544 9.19678V9.2815C10.2544 9.30798 10.265 9.32387 10.2809 9.32387C10.2968 9.32387 10.3074 9.31328 10.3126 9.30269C10.3126 9.29739 10.3179 9.29739 10.3232 9.30269C10.3285 9.31857 10.3444 9.32916 10.3603 9.32916C10.3762 9.32916 10.3921 9.31857 10.3974 9.30269C10.3974 9.29739 10.4027 9.29739 10.408 9.30269C10.4133 9.31857 10.4239 9.32387 10.4397 9.32387C10.4609 9.32387 10.4662 9.30269 10.4662 9.2815V9.19678H10.2544Z"
            fill="url(#paint154_linear)"></path>
        <path opacity="0.75"
            d="M10.2862 9.19678C10.2862 9.25503 10.2597 9.33446 10.2915 9.32387C10.3021 9.31857 10.3074 9.31328 10.3127 9.30269C10.3127 9.29739 10.318 9.29739 10.3233 9.30269C10.3286 9.30798 10.3286 9.31328 10.3339 9.31857C10.3286 9.2868 10.3286 9.21266 10.3339 9.19678H10.2862Z"
            fill="url(#paint155_linear)"></path>
        <path
            d="M10.3656 9.21766C10.427 9.21766 10.4768 9.20817 10.4768 9.19647C10.4768 9.18478 10.427 9.17529 10.3656 9.17529C10.3042 9.17529 10.2544 9.18478 10.2544 9.19647C10.2544 9.20817 10.3042 9.21766 10.3656 9.21766Z"
            fill="url(#paint156_linear)"></path>
        <path
            d="M10.3656 9.21766C10.427 9.21766 10.4768 9.20817 10.4768 9.19647C10.4768 9.18478 10.427 9.17529 10.3656 9.17529C10.3042 9.17529 10.2544 9.18478 10.2544 9.19647C10.2544 9.20817 10.3042 9.21766 10.3656 9.21766Z"
            fill="url(#paint157_linear)"></path>
        <path
            d="M10.3709 9.19646H10.3656H10.3603C10.3603 9.18057 10.3497 9.13821 10.3391 9.10114C10.3285 9.06407 10.3232 9.0323 10.3232 9.01641C10.3232 8.98464 10.3444 8.96875 10.3656 8.96875C10.3868 8.96875 10.408 8.98464 10.408 9.01641C10.408 9.0323 10.3974 9.06407 10.3921 9.10114C10.3815 9.13821 10.3709 9.17527 10.3709 9.19646ZM10.3656 8.97934C10.3497 8.97934 10.3338 8.99523 10.3338 9.01641C10.3338 9.027 10.3444 9.06407 10.3497 9.09584C10.355 9.11702 10.3603 9.13821 10.3656 9.15409C10.3709 9.13821 10.3762 9.11702 10.3815 9.09584C10.3921 9.06407 10.3974 9.027 10.3974 9.01641C10.3974 8.98993 10.3815 8.97934 10.3656 8.97934Z"
            fill="url(#paint158_linear)"></path>
        <path
            d="M10.3656 8.96875C10.3444 8.96875 10.3232 8.98464 10.3232 9.01641C10.3232 9.0323 10.3338 9.06407 10.3391 9.10114C10.3497 9.13821 10.3603 9.17527 10.3603 9.19646C10.3603 9.19646 10.3603 9.19646 10.3656 9.19646C10.3709 9.19646 10.3709 9.19646 10.3709 9.19646C10.3709 9.18057 10.3815 9.13821 10.3921 9.10114C10.4027 9.06407 10.408 9.0323 10.408 9.01641C10.408 8.98464 10.3868 8.96875 10.3656 8.96875ZM10.3815 9.09584C10.3762 9.11702 10.3709 9.13821 10.3656 9.15409C10.3603 9.13821 10.355 9.11702 10.3497 9.09584C10.3391 9.06407 10.3338 9.027 10.3338 9.01641C10.3338 8.98993 10.3497 8.97934 10.3656 8.97934C10.3815 8.97934 10.3974 8.99523 10.3974 9.01641C10.3974 9.0323 10.3868 9.06407 10.3815 9.09584Z"
            fill="url(#paint159_linear)"></path>
        <path
            d="M15.1369 13.4854C15.4001 13.4854 15.6135 13.272 15.6135 13.0088C15.6135 12.7456 15.4001 12.5322 15.1369 12.5322C14.8737 12.5322 14.6603 12.7456 14.6603 13.0088C14.6603 13.272 14.8737 13.4854 15.1369 13.4854Z"
            fill="url(#paint160_radial)"></path>
        <path
            d="M15.1369 13.4854C15.4001 13.4854 15.6135 13.272 15.6135 13.0088C15.6135 12.7456 15.4001 12.5322 15.1369 12.5322C14.8737 12.5322 14.6603 12.7456 14.6603 13.0088C14.6603 13.272 14.8737 13.4854 15.1369 13.4854Z"
            fill="url(#paint161_radial)"></path>
        <path
            d="M15.1369 13.4854C15.4001 13.4854 15.6135 13.272 15.6135 13.0088C15.6135 12.7456 15.4001 12.5322 15.1369 12.5322C14.8737 12.5322 14.6603 12.7456 14.6603 13.0088C14.6603 13.272 14.8737 13.4854 15.1369 13.4854Z"
            fill="url(#paint162_radial)"></path>
        <path
            d="M15.1369 13.4854C15.3182 13.4854 15.4652 13.272 15.4652 13.0088C15.4652 12.7456 15.3182 12.5322 15.1369 12.5322C14.9556 12.5322 14.8086 12.7456 14.8086 13.0088C14.8086 13.272 14.9556 13.4854 15.1369 13.4854Z"
            fill="url(#paint163_linear)"></path>
        <path
            d="M15.211 13.4218C15.4274 13.4218 15.6028 13.2369 15.6028 13.0087C15.6028 12.7806 15.4274 12.5957 15.211 12.5957C14.9945 12.5957 14.8191 12.7806 14.8191 13.0087C14.8191 13.2369 14.9945 13.4218 15.211 13.4218Z"
            fill="url(#paint164_linear)"></path>
        <path
            d="M15.1474 13.1676C15.0257 13.1676 14.8721 13.21 14.7874 13.3371C14.8721 13.4324 14.9992 13.4906 15.1369 13.4906C15.4016 13.4906 15.6134 13.2788 15.6134 13.014C15.6134 12.924 15.587 12.834 15.5446 12.7651C15.5234 13.014 15.301 13.1676 15.1474 13.1676Z"
            fill="url(#paint165_radial)"></path>
        <path
            d="M15.1634 12.5322C15.3169 12.6064 15.4229 12.7599 15.4229 12.9453C15.4229 13.1942 15.2216 13.4007 14.9674 13.4007C14.9198 13.4007 14.8721 13.3901 14.8245 13.3795C14.9092 13.4483 15.0151 13.4907 15.1316 13.4907C15.3964 13.4907 15.6082 13.2789 15.6082 13.0141C15.6135 12.7546 15.4123 12.5481 15.1634 12.5322Z"
            fill="url(#paint166_linear)"></path>
        <path
            d="M15.1369 13.4854C15.4001 13.4854 15.6135 13.272 15.6135 13.0088C15.6135 12.7456 15.4001 12.5322 15.1369 12.5322C14.8737 12.5322 14.6603 12.7456 14.6603 13.0088C14.6603 13.272 14.8737 13.4854 15.1369 13.4854Z"
            fill="url(#paint167_radial)"></path>
        <path opacity="0.48"
            d="M15.1951 12.6223C15.2427 12.6965 15.1845 12.8236 15.0627 12.903C14.9409 12.9824 14.7979 12.9877 14.7502 12.9136C14.7026 12.8394 14.7608 12.7123 14.8826 12.6329C15.0097 12.5482 15.1474 12.5429 15.1951 12.6223Z"
            fill="url(#paint168_radial)"></path>
        <path
            d="M15.0256 12.4478V12.5325C15.0256 12.559 15.0362 12.5748 15.0521 12.5748C15.068 12.5748 15.0786 12.5643 15.0839 12.5537C15.0839 12.5484 15.0892 12.5484 15.0945 12.5537C15.0998 12.5695 15.1157 12.5801 15.1315 12.5801C15.1474 12.5801 15.1633 12.5695 15.1686 12.5537C15.1686 12.5484 15.1739 12.5484 15.1792 12.5537C15.1845 12.5695 15.1951 12.5748 15.211 12.5748C15.2322 12.5748 15.2375 12.5537 15.2375 12.5325V12.4478H15.0256Z"
            fill="url(#paint169_linear)"></path>
        <path opacity="0.75"
            d="M15.0575 12.4478C15.0575 12.506 15.031 12.5854 15.0628 12.5748C15.0733 12.5696 15.0786 12.5643 15.0839 12.5537C15.0839 12.5484 15.0892 12.5484 15.0945 12.5537C15.0998 12.559 15.0998 12.5643 15.1051 12.5696C15.0998 12.5378 15.0998 12.4636 15.1051 12.4478H15.0575Z"
            fill="url(#paint170_linear)"></path>
        <path
            d="M15.1368 12.4686C15.1983 12.4686 15.248 12.4591 15.248 12.4475C15.248 12.4358 15.1983 12.4263 15.1368 12.4263C15.0754 12.4263 15.0256 12.4358 15.0256 12.4475C15.0256 12.4591 15.0754 12.4686 15.1368 12.4686Z"
            fill="url(#paint171_linear)"></path>
        <path
            d="M15.1368 12.4686C15.1983 12.4686 15.248 12.4591 15.248 12.4475C15.248 12.4358 15.1983 12.4263 15.1368 12.4263C15.0754 12.4263 15.0256 12.4358 15.0256 12.4475C15.0256 12.4591 15.0754 12.4686 15.1368 12.4686Z"
            fill="url(#paint172_linear)"></path>
        <path
            d="M15.1421 12.4474H15.1368H15.1315C15.1315 12.4315 15.121 12.3892 15.1104 12.3521C15.0998 12.315 15.0945 12.2833 15.0945 12.2674C15.0945 12.2356 15.1157 12.2197 15.1368 12.2197C15.158 12.2197 15.1792 12.2356 15.1792 12.2674C15.1792 12.2833 15.1686 12.315 15.1633 12.3521C15.1527 12.3892 15.1421 12.4315 15.1421 12.4474ZM15.1368 12.2303C15.121 12.2303 15.1051 12.2462 15.1051 12.2674C15.1051 12.278 15.1157 12.315 15.121 12.3468C15.1263 12.368 15.1315 12.3892 15.1368 12.4051C15.1421 12.3892 15.1474 12.368 15.1527 12.3468C15.1633 12.315 15.1686 12.278 15.1686 12.2674C15.1686 12.2462 15.1527 12.2303 15.1368 12.2303Z"
            fill="url(#paint173_linear)"></path>
        <path
            d="M15.1368 12.2197C15.1157 12.2197 15.0945 12.2356 15.0945 12.2674C15.0945 12.2833 15.1051 12.315 15.1104 12.3521C15.121 12.3892 15.1315 12.4262 15.1315 12.4474C15.1315 12.4474 15.1315 12.4474 15.1368 12.4474C15.1421 12.4474 15.1421 12.4474 15.1421 12.4474C15.1421 12.4315 15.1527 12.3892 15.1633 12.3521C15.1739 12.315 15.1792 12.2833 15.1792 12.2674C15.1792 12.2409 15.158 12.2197 15.1368 12.2197ZM15.1527 12.3521C15.1474 12.3733 15.1421 12.3945 15.1368 12.4104C15.1315 12.3945 15.1263 12.3733 15.121 12.3521C15.1104 12.3203 15.1051 12.2833 15.1051 12.2727C15.1051 12.2462 15.121 12.2356 15.1368 12.2356C15.1527 12.2356 15.1686 12.2515 15.1686 12.2727C15.1686 12.2833 15.158 12.315 15.1527 12.3521Z"
            fill="url(#paint174_linear)"></path>
        <defs>
            <linearGradient id="paint0_linear" x1="13.1626" y1="20.5231" x2="10.0021" y2="13.1875"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="1" stop-color="#512D00"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="10.1302" y1="22.4085" x2="12.6787" y2="16.1368"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="1" stop-color="#512D00"></stop>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="12.0575" y1="14.2905" x2="12.0575" y2="18.144"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4B8C1C"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="11.9648" y1="13.9624" x2="11.9648" y2="16.9126"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4B8C1C"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint4_linear" x1="11.9837" y1="14.6806" x2="12.1928" y2="21.1612"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0D55B" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint5_linear" x1="13.0877" y1="20.6495" x2="11.8732" y2="19.7735"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#C86F34"></stop>
                <stop offset="1" stop-color="#A3541E"></stop>
            </linearGradient>
            <linearGradient id="paint6_linear" x1="11.9684" y1="11.7519" x2="11.9684" y2="14.201"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4B8C1C"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint7_linear" x1="12.0685" y1="12.1059" x2="12.0685" y2="14.3144"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4B8C1C"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint8_linear" x1="11.7493" y1="11.6025" x2="11.7493" y2="16.8232"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0D55B" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint9_linear" x1="11.9724" y1="8.49678" x2="11.9724" y2="11.0356"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4B8C1C"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint10_linear" x1="11.9491" y1="12.3792" x2="11.9491" y2="10.5281"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0D55B" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint11_linear" x1="11.8797" y1="8.76706" x2="12.1783" y2="11.3951"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0D55B" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint12_linear" x1="12.0595" y1="6.22732" x2="12.0595" y2="8.76651"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4B8C1C"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint13_linear" x1="12.0281" y1="7.5115" x2="12.0281" y2="9.59915"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0D55B" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint14_linear" x1="11.9395" y1="6.62181" x2="11.9793" y2="7.95577"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0D55B" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint15_linear" x1="12.007" y1="7.76058" x2="12.007" y2="4.95705"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4B8C1C"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <linearGradient id="paint16_linear" x1="11.6958" y1="4.6987" x2="11.8352" y2="6.35121"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0D55B" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#76AB50"></stop>
            </linearGradient>
            <radialGradient id="paint17_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.8547 17.4194) scale(0.522526)">
                <stop stop-color="#FFF9EB"></stop>
                <stop offset="0.1944" stop-color="#FFF7E5"></stop>
                <stop offset="0.4655" stop-color="#FFF2D2"></stop>
                <stop offset="0.7803" stop-color="#FFE9B5"></stop>
                <stop offset="1" stop-color="#FFE29C"></stop>
            </radialGradient>
            <radialGradient id="paint18_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.2164 16.975) scale(1.05903 1.05922)">
                <stop stop-color="#FFD748" stop-opacity="0"></stop>
                <stop offset="0.2692" stop-color="#FFD14A" stop-opacity="0.2019"></stop>
                <stop offset="0.6435" stop-color="#FFBF4E" stop-opacity="0.4827"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint19_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.8977 17.4181) scale(0.495083)">
                <stop offset="0.873" stop-color="#FFE29A" stop-opacity="0"></stop>
                <stop offset="0.8997" stop-color="#FFDD94" stop-opacity="0.1578"></stop>
                <stop offset="0.937" stop-color="#FFCD81" stop-opacity="0.3778"></stop>
                <stop offset="0.9802" stop-color="#FFB464" stop-opacity="0.6332"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint20_linear" x1="15.7287" y1="17.5611" x2="16.5789" y2="16.9831"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD15F"></stop>
            </linearGradient>
            <linearGradient id="paint21_linear" x1="15.5606" y1="17.0299" x2="16.9959" y2="18.3373"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD97C"></stop>
            </linearGradient>
            <radialGradient id="paint22_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.7635 16.8828) scale(0.790582 0.790736)">
                <stop stop-color="#FFCB4B"></stop>
                <stop offset="1" stop-color="#FFDE8C" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint23_linear" x1="16.0152" y1="17.4748" x2="16.7627" y2="17.8389"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD97C"></stop>
            </linearGradient>
            <radialGradient id="paint24_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.9099 17.237) scale(0.747544 0.747684)">
                <stop stop-color="#FFD748" stop-opacity="0"></stop>
                <stop offset="0.2692" stop-color="#FFD14A" stop-opacity="0.2019"></stop>
                <stop offset="0.6435" stop-color="#FFBF4E" stop-opacity="0.4827"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint25_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.7412 17.1871) rotate(-33.2557) scale(0.221396 0.164303)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint26_linear" x1="15.9076" y1="16.8697" x2="15.9661" y2="17.0572"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint27_linear" x1="15.8471" y1="16.9285" x2="15.8902" y2="16.9339"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint28_linear" x1="15.9307" y1="16.8777" x2="16.0158" y2="16.9973"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint29_linear" x1="15.9632" y1="17.0017" x2="15.8985" y2="16.7876"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint30_linear" x1="15.9183" y1="16.6699" x2="15.9468" y2="16.8153"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint31_linear" x1="15.8663" y1="16.6052" x2="15.9696" y2="16.8362"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint32_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.7716 3.93069) scale(1.1793 1.17943)">
                <stop stop-color="#FFE343"></stop>
                <stop offset="0.5492" stop-color="#FFE241"></stop>
                <stop offset="0.7469" stop-color="#FFDF3A"></stop>
                <stop offset="0.8874" stop-color="#FEDA2F"></stop>
                <stop offset="1" stop-color="#FED31E"></stop>
            </radialGradient>
            <radialGradient id="paint33_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.9682 4.39888) rotate(-39.4899) scale(0.218114 0.587351)">
                <stop stop-color="#D86D00"></stop>
                <stop offset="0.3292" stop-color="#DC6C0A" stop-opacity="0.6708"></stop>
                <stop offset="0.8792" stop-color="#E86823" stop-opacity="0.1208"></stop>
                <stop offset="1" stop-color="#EB672A" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint34_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.8363 4.41263) rotate(-140.51) scale(0.218113 0.587349)">
                <stop stop-color="#D86D00"></stop>
                <stop offset="0.3292" stop-color="#DC6C0A" stop-opacity="0.6708"></stop>
                <stop offset="0.8792" stop-color="#E86823" stop-opacity="0.1208"></stop>
                <stop offset="1" stop-color="#EB672A" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint35_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.6008 3.2713) rotate(46.8312) scale(0.854159 0.587881)">
                <stop stop-color="#ED9900"></stop>
                <stop offset="1" stop-color="#ED9900" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint36_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.8952 3.83384) rotate(-41.4237) scale(0.678508 0.371824)">
                <stop stop-color="#FFEC5F"></stop>
                <stop offset="1" stop-color="#FFEC5F" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint37_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.586 5.3144) rotate(-26.3262) scale(0.648448 0.307347)">
                <stop stop-color="#D86D00"></stop>
                <stop offset="0.3292" stop-color="#DC6C0A" stop-opacity="0.6708"></stop>
                <stop offset="0.8792" stop-color="#E86823" stop-opacity="0.1208"></stop>
                <stop offset="1" stop-color="#EB672A" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint38_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.1867 5.30056) rotate(-153.674) scale(0.648448 0.307347)">
                <stop stop-color="#D86D00"></stop>
                <stop offset="0.3292" stop-color="#DC6C0A" stop-opacity="0.6708"></stop>
                <stop offset="0.8792" stop-color="#E86823" stop-opacity="0.1208"></stop>
                <stop offset="1" stop-color="#EB672A" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint39_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.8442 5.64732) rotate(177.226) scale(0.857788 0.879567)">
                <stop stop-color="#D86D00"></stop>
                <stop offset="0.3292" stop-color="#DC6C0A" stop-opacity="0.6708"></stop>
                <stop offset="0.8792" stop-color="#E86823" stop-opacity="0.1208"></stop>
                <stop offset="1" stop-color="#EB672A" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint40_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.1952 4.72312) rotate(158.451) scale(0.906454 0.685332)">
                <stop stop-color="#D86D00"></stop>
                <stop offset="0.3292" stop-color="#DC6C0A" stop-opacity="0.6708"></stop>
                <stop offset="0.8792" stop-color="#E86823" stop-opacity="0.1208"></stop>
                <stop offset="1" stop-color="#EB672A" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint41_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.8117 3.88956) rotate(158.451) scale(0.546148 0.41292)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint42_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.1234 3.18978) rotate(133.169) scale(0.854158 0.587881)">
                <stop stop-color="#ED9900"></stop>
                <stop offset="1" stop-color="#ED9900" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint43_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.845 4.23076) scale(1.40605 1.4062)">
                <stop stop-color="#FF8000" stop-opacity="0"></stop>
                <stop offset="0.5434" stop-color="#FD7F00" stop-opacity="0.5434"></stop>
                <stop offset="0.7391" stop-color="#F67C00" stop-opacity="0.7391"></stop>
                <stop offset="0.8781" stop-color="#EB7600" stop-opacity="0.8781"></stop>
                <stop offset="0.9903" stop-color="#DA6E00" stop-opacity="0.9903"></stop>
                <stop offset="1" stop-color="#D86D00"></stop>
            </radialGradient>
            <radialGradient id="paint44_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.9014 4.25764) scale(1.21494 1.2152)">
                <stop stop-color="#A3541E" stop-opacity="0.5"></stop>
                <stop offset="0.5109" stop-color="#A5551D" stop-opacity="0.7555"></stop>
                <stop offset="0.695" stop-color="#AC5819" stop-opacity="0.8475"></stop>
                <stop offset="0.8261" stop-color="#B75E12" stop-opacity="0.9131"></stop>
                <stop offset="0.9315" stop-color="#C86609" stop-opacity="0.9657"></stop>
                <stop offset="1" stop-color="#D86D00"></stop>
            </radialGradient>
            <radialGradient id="paint45_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.3047 6.99688) scale(0.608308 0.608447)">
                <stop stop-color="#24420D" stop-opacity="0.75"></stop>
                <stop offset="1" stop-color="#24420D" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint46_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.262 6.69552) rotate(-33.2561) scale(0.22139 0.164293)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint47_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.2236 6.93518) scale(0.522525)">
                <stop stop-color="#FFBFA3"></stop>
                <stop offset="0.1093" stop-color="#FFB99D"></stop>
                <stop offset="0.2617" stop-color="#FFA68E"></stop>
                <stop offset="0.4396" stop-color="#FF8975"></stop>
                <stop offset="0.6368" stop-color="#FF5F51"></stop>
                <stop offset="0.8472" stop-color="#FF2B25"></stop>
                <stop offset="1" stop-color="#FF0000"></stop>
            </radialGradient>
            <radialGradient id="paint48_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.5854 6.49071) scale(1.05902 1.0592)">
                <stop stop-color="#FF2626" stop-opacity="0"></stop>
                <stop offset="0.4353" stop-color="#FF2020" stop-opacity="0.3265"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint49_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.2667 6.93387) scale(0.495082)">
                <stop offset="0.873" stop-color="#FF4F4F" stop-opacity="0"></stop>
                <stop offset="0.9013" stop-color="#FF4949" stop-opacity="0.1673"></stop>
                <stop offset="0.9408" stop-color="#FF3636" stop-opacity="0.4006"></stop>
                <stop offset="0.9867" stop-color="#FF1919" stop-opacity="0.6715"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint50_linear" x1="11.0993" y1="7.06093" x2="11.9496" y2="6.48296"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FF2E2E"></stop>
            </linearGradient>
            <linearGradient id="paint51_linear" x1="10.9313" y1="6.52969" x2="12.3665" y2="7.83719"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#C20000"></stop>
            </linearGradient>
            <radialGradient id="paint52_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.1324 6.39819) scale(0.790589 0.790716)">
                <stop stop-color="#FF7070"></stop>
                <stop offset="1" stop-color="#FF5959" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint53_linear" x1="11.3859" y1="6.97466" x2="12.1333" y2="7.33877"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#C20000"></stop>
            </linearGradient>
            <radialGradient id="paint54_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.2789 6.75278) scale(0.747538 0.74766)">
                <stop stop-color="#FF2626" stop-opacity="0"></stop>
                <stop offset="0.4353" stop-color="#FF2020" stop-opacity="0.3265"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint55_linear" x1="11.2783" y1="6.36952" x2="11.3367" y2="6.55703"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint56_linear" x1="11.2177" y1="6.42838" x2="11.2609" y2="6.43372"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint57_linear" x1="11.3013" y1="6.37757" x2="11.3865" y2="6.49714"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint58_linear" x1="11.3338" y1="6.50149" x2="11.2692" y2="6.28739"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint59_linear" x1="11.2889" y1="6.1697" x2="11.3175" y2="6.3151"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint60_linear" x1="11.237" y1="6.105" x2="11.3403" y2="6.33601"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <linearGradient id="paint61_linear" x1="11.2371" y1="6.10451" x2="11.3404" y2="6.33553"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint62_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.3773 9.82507) scale(0.608309 0.608444)">
                <stop stop-color="#24420D" stop-opacity="0.75"></stop>
                <stop offset="1" stop-color="#24420D" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint63_linear" x1="10.3097" y1="8.93314" x2="10.413" y2="9.16415"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint64_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.78552 12.8535) scale(0.608308 0.608446)">
                <stop stop-color="#24420D" stop-opacity="0.75"></stop>
                <stop offset="1" stop-color="#24420D" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint65_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(13.8715 10.5871) scale(0.608307 0.608447)">
                <stop stop-color="#24420D" stop-opacity="0.75"></stop>
                <stop offset="1" stop-color="#24420D" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint66_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.1792 13.8339) scale(0.60831 0.608447)">
                <stop stop-color="#24420D" stop-opacity="0.75"></stop>
                <stop offset="1" stop-color="#24420D" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint67_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.1482 13.0774) scale(0.608307 0.608446)">
                <stop stop-color="#24420D" stop-opacity="0.75"></stop>
                <stop offset="1" stop-color="#24420D" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint68_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.43584 15.671) scale(0.60831 0.608447)">
                <stop stop-color="#24420D" stop-opacity="0.75"></stop>
                <stop offset="1" stop-color="#24420D" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint69_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.7663 17.9873) scale(0.60831 0.608447)">
                <stop stop-color="#24420D" stop-opacity="0.75"></stop>
                <stop offset="1" stop-color="#24420D" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint70_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.39347 15.3694) rotate(-33.2562) scale(0.221389 0.164292)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint71_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.35501 15.6089) scale(0.522524)">
                <stop stop-color="#FFBFA3"></stop>
                <stop offset="0.1093" stop-color="#FFB99D"></stop>
                <stop offset="0.2617" stop-color="#FFA68E"></stop>
                <stop offset="0.4396" stop-color="#FF8975"></stop>
                <stop offset="0.6368" stop-color="#FF5F51"></stop>
                <stop offset="0.8472" stop-color="#FF2B25"></stop>
                <stop offset="1" stop-color="#FF0000"></stop>
            </radialGradient>
            <radialGradient id="paint72_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(7.71678 15.1644) scale(1.05902 1.0592)">
                <stop stop-color="#FF2626" stop-opacity="0"></stop>
                <stop offset="0.4353" stop-color="#FF2020" stop-opacity="0.3265"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint73_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.39802 15.6076) scale(0.495081)">
                <stop offset="0.873" stop-color="#FF4F4F" stop-opacity="0"></stop>
                <stop offset="0.9013" stop-color="#FF4949" stop-opacity="0.1673"></stop>
                <stop offset="0.9408" stop-color="#FF3636" stop-opacity="0.4006"></stop>
                <stop offset="0.9867" stop-color="#FF1919" stop-opacity="0.6715"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint74_linear" x1="8.23072" y1="15.7349" x2="9.08097" y2="15.157"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FF2E2E"></stop>
            </linearGradient>
            <linearGradient id="paint75_linear" x1="8.06264" y1="15.2037" x2="9.49794" y2="16.5112"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#C20000"></stop>
            </linearGradient>
            <radialGradient id="paint76_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.26383 15.0719) scale(0.790585 0.790719)">
                <stop stop-color="#FF7070"></stop>
                <stop offset="1" stop-color="#FF5959" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint77_linear" x1="8.51724" y1="15.6486" x2="9.26474" y2="16.0128"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#C20000"></stop>
            </linearGradient>
            <radialGradient id="paint78_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.41028 15.4265) scale(0.747537 0.74766)">
                <stop stop-color="#FF2626" stop-opacity="0"></stop>
                <stop offset="0.4353" stop-color="#FF2020" stop-opacity="0.3265"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint79_linear" x1="8.40968" y1="15.043" x2="8.46811" y2="15.2305"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint80_linear" x1="8.34909" y1="15.1019" x2="8.39224" y2="15.1072"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint81_linear" x1="8.4327" y1="15.0516" x2="8.51784" y2="15.1711"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint82_linear" x1="8.4652" y1="15.1755" x2="8.40058" y2="14.9614"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint83_linear" x1="8.42033" y1="14.8437" x2="8.44886" y2="14.9891"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint84_linear" x1="8.36838" y1="14.779" x2="8.47165" y2="15.01"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint85_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.1095 13.5789) rotate(-33.2607) scale(0.221398 0.164299)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient id="paint86_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.1127 13.7779) scale(0.522518)">
                <stop stop-color="#FFBFA3"></stop>
                <stop offset="0.1093" stop-color="#FFB99D"></stop>
                <stop offset="0.2617" stop-color="#FFA68E"></stop>
                <stop offset="0.4396" stop-color="#FF8975"></stop>
                <stop offset="0.6368" stop-color="#FF5F51"></stop>
                <stop offset="0.8472" stop-color="#FF2B25"></stop>
                <stop offset="1" stop-color="#FF0000"></stop>
            </radialGradient>
            <radialGradient id="paint87_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.4744 13.3335) scale(1.05901 1.05919)">
                <stop stop-color="#FF2626" stop-opacity="0"></stop>
                <stop offset="0.4353" stop-color="#FF2020" stop-opacity="0.3265"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint88_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.1557 13.7766) scale(0.495076)">
                <stop offset="0.873" stop-color="#FF4F4F" stop-opacity="0"></stop>
                <stop offset="0.9013" stop-color="#FF4949" stop-opacity="0.1673"></stop>
                <stop offset="0.9408" stop-color="#FF3636" stop-opacity="0.4006"></stop>
                <stop offset="0.9867" stop-color="#FF1919" stop-opacity="0.6715"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint89_linear" x1="11.9739" y1="13.8978" x2="12.8242" y2="13.3199"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FF2E2E"></stop>
            </linearGradient>
            <linearGradient id="paint90_linear" x1="11.8058" y1="13.3666" x2="13.2411" y2="14.6741"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#C20000"></stop>
            </linearGradient>
            <radialGradient id="paint91_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.0215 13.2409) scale(0.790576 0.790707)">
                <stop stop-color="#FF7070"></stop>
                <stop offset="1" stop-color="#FF5959" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint92_linear" x1="12.2604" y1="13.8116" x2="13.0079" y2="14.1757"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4C00" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#C20000"></stop>
            </linearGradient>
            <radialGradient id="paint93_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.1679 13.5955) scale(0.747532 0.747656)">
                <stop stop-color="#FF2626" stop-opacity="0"></stop>
                <stop offset="0.4353" stop-color="#FF2020" stop-opacity="0.3265"></stop>
                <stop offset="1" stop-color="#FF0F0F" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint94_linear" x1="12.1529" y1="13.2059" x2="12.2113" y2="13.3935"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint95_linear" x1="12.0923" y1="13.2648" x2="12.1354" y2="13.2701"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint96_linear" x1="12.1759" y1="13.2145" x2="12.261" y2="13.334"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint97_linear" x1="12.2084" y1="13.3384" x2="12.1438" y2="13.1243"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint98_linear" x1="12.1635" y1="13.0066" x2="12.192" y2="13.152"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint99_linear" x1="12.1116" y1="12.9419" x2="12.2148" y2="13.1729"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint100_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(13.8094 10.5085) scale(0.522517 0.522633)">
                <stop stop-color="#D1F1FF"></stop>
                <stop offset="0.1112" stop-color="#CBEFFF"></stop>
                <stop offset="0.2664" stop-color="#B8EAFF"></stop>
                <stop offset="0.4474" stop-color="#9BE1FF"></stop>
                <stop offset="0.6479" stop-color="#71D5FE"></stop>
                <stop offset="0.8621" stop-color="#3DC6FE"></stop>
                <stop offset="1" stop-color="#17BBFE"></stop>
            </radialGradient>
            <radialGradient id="paint101_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(13.1712 10.0641) scale(1.05901 1.05925)">
                <stop stop-color="#B0E9FF" stop-opacity="0"></stop>
                <stop offset="0.1153" stop-color="#AAE6FD" stop-opacity="0.0864487"></stop>
                <stop offset="0.2761" stop-color="#97DEF9" stop-opacity="0.2071"></stop>
                <stop offset="0.4638" stop-color="#7AD0F2" stop-opacity="0.3479"></stop>
                <stop offset="0.6717" stop-color="#50BDE9" stop-opacity="0.5038"></stop>
                <stop offset="0.8937" stop-color="#1CA6DC" stop-opacity="0.6703"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint102_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(13.8525 10.5072) scale(0.495071 0.495181)">
                <stop offset="0.873" stop-color="#D1F2FF" stop-opacity="0"></stop>
                <stop offset="0.8861" stop-color="#CBEFFE" stop-opacity="0.0772903"></stop>
                <stop offset="0.9043" stop-color="#B8E8FA" stop-opacity="0.1851"></stop>
                <stop offset="0.9257" stop-color="#9BDBF4" stop-opacity="0.311"></stop>
                <stop offset="0.9493" stop-color="#71C9EC" stop-opacity="0.4505"></stop>
                <stop offset="0.9746" stop-color="#3CB3E2" stop-opacity="0.6002"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint103_linear" x1="13.6663" y1="10.6511" x2="14.5166" y2="10.0732"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#8EDEFE"></stop>
            </linearGradient>
            <linearGradient id="paint104_linear" x1="13.4983" y1="10.1199" x2="14.9336" y2="11.4274"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <radialGradient id="paint105_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(13.7183 9.9715) scale(0.790578 0.790759)">
                <stop stop-color="#80DAFE"></stop>
                <stop offset="1" stop-color="#AEE7FE" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint106_linear" x1="13.9529" y1="10.5648" x2="14.7004" y2="10.929"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <radialGradient id="paint107_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(13.8647 10.3261) scale(0.747527 0.747693)">
                <stop stop-color="#B0E9FF" stop-opacity="0"></stop>
                <stop offset="0.1153" stop-color="#AAE6FD" stop-opacity="0.0864487"></stop>
                <stop offset="0.2761" stop-color="#97DEF9" stop-opacity="0.2071"></stop>
                <stop offset="0.4638" stop-color="#7AD0F2" stop-opacity="0.3479"></stop>
                <stop offset="0.6717" stop-color="#50BDE9" stop-opacity="0.5038"></stop>
                <stop offset="0.8937" stop-color="#1CA6DC" stop-opacity="0.6703"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint108_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(13.712 10.2608) rotate(-33.2543) scale(0.221389 0.164298)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint109_linear" x1="13.8453" y1="9.9597" x2="13.9038" y2="10.1472"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint110_linear" x1="13.7848" y1="10.0186" x2="13.8279" y2="10.0239"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint111_linear" x1="13.8683" y1="9.96777" x2="13.9535" y2="10.0873"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint112_linear" x1="13.9008" y1="10.0917" x2="13.8362" y2="9.87758"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint113_linear" x1="13.856" y1="9.75989" x2="13.8845" y2="9.90529"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint114_linear" x1="13.804" y1="9.69519" x2="13.9073" y2="9.9262"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint115_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.7042 17.9076) scale(0.522517 0.522635)">
                <stop stop-color="#D1F1FF"></stop>
                <stop offset="0.1112" stop-color="#CBEFFF"></stop>
                <stop offset="0.2664" stop-color="#B8EAFF"></stop>
                <stop offset="0.4474" stop-color="#9BE1FF"></stop>
                <stop offset="0.6479" stop-color="#71D5FE"></stop>
                <stop offset="0.8621" stop-color="#3DC6FE"></stop>
                <stop offset="1" stop-color="#17BBFE"></stop>
            </radialGradient>
            <radialGradient id="paint116_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.066 17.4632) scale(1.05901 1.05925)">
                <stop stop-color="#B0E9FF" stop-opacity="0"></stop>
                <stop offset="0.1153" stop-color="#AAE6FD" stop-opacity="0.0864487"></stop>
                <stop offset="0.2761" stop-color="#97DEF9" stop-opacity="0.2071"></stop>
                <stop offset="0.4638" stop-color="#7AD0F2" stop-opacity="0.3479"></stop>
                <stop offset="0.6717" stop-color="#50BDE9" stop-opacity="0.5038"></stop>
                <stop offset="0.8937" stop-color="#1CA6DC" stop-opacity="0.6703"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint117_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.7472 17.9063) scale(0.495071 0.495182)">
                <stop offset="0.873" stop-color="#D1F2FF" stop-opacity="0"></stop>
                <stop offset="0.8861" stop-color="#CBEFFE" stop-opacity="0.0772903"></stop>
                <stop offset="0.9043" stop-color="#B8E8FA" stop-opacity="0.1851"></stop>
                <stop offset="0.9257" stop-color="#9BDBF4" stop-opacity="0.311"></stop>
                <stop offset="0.9493" stop-color="#71C9EC" stop-opacity="0.4505"></stop>
                <stop offset="0.9746" stop-color="#3CB3E2" stop-opacity="0.6002"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint118_linear" x1="10.5611" y1="18.0501" x2="11.4114" y2="17.4721"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#8EDEFE"></stop>
            </linearGradient>
            <linearGradient id="paint119_linear" x1="10.3929" y1="17.5188" x2="11.8282" y2="18.8263"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <radialGradient id="paint120_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.613 17.3706) scale(0.79058 0.790755)">
                <stop stop-color="#80DAFE"></stop>
                <stop offset="1" stop-color="#AEE7FE" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint121_linear" x1="10.8475" y1="17.9638" x2="11.595" y2="18.3279"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <radialGradient id="paint122_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.7595 17.7252) scale(0.747527 0.747695)">
                <stop stop-color="#B0E9FF" stop-opacity="0"></stop>
                <stop offset="0.1153" stop-color="#AAE6FD" stop-opacity="0.0864487"></stop>
                <stop offset="0.2761" stop-color="#97DEF9" stop-opacity="0.2071"></stop>
                <stop offset="0.4638" stop-color="#7AD0F2" stop-opacity="0.3479"></stop>
                <stop offset="0.6717" stop-color="#50BDE9" stop-opacity="0.5038"></stop>
                <stop offset="0.8937" stop-color="#1CA6DC" stop-opacity="0.6703"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint123_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.6068 17.6597) rotate(-33.2545) scale(0.22139 0.1643)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint124_linear" x1="10.7401" y1="17.3592" x2="10.7985" y2="17.5468"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint125_linear" x1="10.6795" y1="17.4181" x2="10.7227" y2="17.4234"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint126_linear" x1="10.7631" y1="17.3673" x2="10.8482" y2="17.4868"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint127_linear" x1="10.7956" y1="17.4912" x2="10.731" y2="17.2771"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint128_linear" x1="10.7507" y1="17.1594" x2="10.7793" y2="17.3048"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint129_linear" x1="10.6988" y1="17.0946" x2="10.8021" y2="17.3257"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint130_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.72333 12.7744) scale(0.522516 0.522634)">
                <stop stop-color="#D1F1FF"></stop>
                <stop offset="0.1112" stop-color="#CBEFFF"></stop>
                <stop offset="0.2664" stop-color="#B8EAFF"></stop>
                <stop offset="0.4474" stop-color="#9BE1FF"></stop>
                <stop offset="0.6479" stop-color="#71D5FE"></stop>
                <stop offset="0.8621" stop-color="#3DC6FE"></stop>
                <stop offset="1" stop-color="#17BBFE"></stop>
            </radialGradient>
            <radialGradient id="paint131_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.08508 12.33) scale(1.05901 1.05925)">
                <stop stop-color="#B0E9FF" stop-opacity="0"></stop>
                <stop offset="0.1153" stop-color="#AAE6FD" stop-opacity="0.0864487"></stop>
                <stop offset="0.2761" stop-color="#97DEF9" stop-opacity="0.2071"></stop>
                <stop offset="0.4638" stop-color="#7AD0F2" stop-opacity="0.3479"></stop>
                <stop offset="0.6717" stop-color="#50BDE9" stop-opacity="0.5038"></stop>
                <stop offset="0.8937" stop-color="#1CA6DC" stop-opacity="0.6703"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint132_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.76634 12.7731) scale(0.495069 0.495182)">
                <stop offset="0.873" stop-color="#D1F2FF" stop-opacity="0"></stop>
                <stop offset="0.8861" stop-color="#CBEFFE" stop-opacity="0.0772903"></stop>
                <stop offset="0.9043" stop-color="#B8E8FA" stop-opacity="0.1851"></stop>
                <stop offset="0.9257" stop-color="#9BDBF4" stop-opacity="0.311"></stop>
                <stop offset="0.9493" stop-color="#71C9EC" stop-opacity="0.4505"></stop>
                <stop offset="0.9746" stop-color="#3CB3E2" stop-opacity="0.6002"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint133_linear" x1="8.58009" y1="12.917" x2="9.43034" y2="12.339"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#8EDEFE"></stop>
            </linearGradient>
            <linearGradient id="paint134_linear" x1="8.41213" y1="12.3857" x2="9.84742" y2="13.6932"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <radialGradient id="paint135_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.63213 12.2374) scale(0.790581 0.790756)">
                <stop stop-color="#80DAFE"></stop>
                <stop offset="1" stop-color="#AEE7FE" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint136_linear" x1="8.86673" y1="12.8307" x2="9.61422" y2="13.1948"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#7FDAFE" stop-opacity="0"></stop>
                <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <radialGradient id="paint137_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.77861 12.592) scale(0.747525 0.747695)">
                <stop stop-color="#B0E9FF" stop-opacity="0"></stop>
                <stop offset="0.1153" stop-color="#AAE6FD" stop-opacity="0.0864487"></stop>
                <stop offset="0.2761" stop-color="#97DEF9" stop-opacity="0.2071"></stop>
                <stop offset="0.4638" stop-color="#7AD0F2" stop-opacity="0.3479"></stop>
                <stop offset="0.6717" stop-color="#50BDE9" stop-opacity="0.5038"></stop>
                <stop offset="0.8937" stop-color="#1CA6DC" stop-opacity="0.6703"></stop>
                <stop offset="1" stop-color="#0099D6" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint138_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.62591 12.5265) rotate(-33.2545) scale(0.22139 0.164299)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint139_linear" x1="8.75916" y1="12.2256" x2="8.81759" y2="12.4131"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint140_linear" x1="8.69858" y1="12.2844" x2="8.74173" y2="12.2898"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint141_linear" x1="8.78219" y1="12.2336" x2="8.86734" y2="12.3532"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint142_linear" x1="8.81469" y1="12.3575" x2="8.75006" y2="12.1434"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint143_linear" x1="8.76981" y1="12.0257" x2="8.79835" y2="12.1711"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint144_linear" x1="8.71786" y1="11.961" x2="8.82113" y2="12.1921"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint145_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.2978 9.74742) scale(0.522526)">
                <stop stop-color="#FFF9EB"></stop>
                <stop offset="0.1944" stop-color="#FFF7E5"></stop>
                <stop offset="0.4655" stop-color="#FFF2D2"></stop>
                <stop offset="0.7803" stop-color="#FFE9B5"></stop>
                <stop offset="1" stop-color="#FFE29C"></stop>
            </radialGradient>
            <radialGradient id="paint146_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(9.65956 9.30298) scale(1.05902 1.05922)">
                <stop stop-color="#FFD748" stop-opacity="0"></stop>
                <stop offset="0.2692" stop-color="#FFD14A" stop-opacity="0.2019"></stop>
                <stop offset="0.6435" stop-color="#FFBF4E" stop-opacity="0.4827"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint147_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.3409 9.74614) scale(0.495083)">
                <stop offset="0.873" stop-color="#FFE29A" stop-opacity="0"></stop>
                <stop offset="0.8997" stop-color="#FFDD94" stop-opacity="0.1578"></stop>
                <stop offset="0.937" stop-color="#FFCD81" stop-opacity="0.3778"></stop>
                <stop offset="0.9802" stop-color="#FFB464" stop-opacity="0.6332"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint148_linear" x1="10.172" y1="9.88906" x2="11.0222" y2="9.3111"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD15F"></stop>
            </linearGradient>
            <linearGradient id="paint149_linear" x1="10.0038" y1="9.35783" x2="11.4391" y2="10.6653"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD97C"></stop>
            </linearGradient>
            <radialGradient id="paint150_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.2066 9.21042) scale(0.790583 0.790736)">
                <stop stop-color="#FFCB4B"></stop>
                <stop offset="1" stop-color="#FFDE8C" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint151_linear" x1="10.4584" y1="9.80279" x2="11.2059" y2="10.1669"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD97C"></stop>
            </linearGradient>
            <radialGradient id="paint152_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.3531 9.56502) scale(0.747543 0.747684)">
                <stop stop-color="#FFD748" stop-opacity="0"></stop>
                <stop offset="0.2692" stop-color="#FFD14A" stop-opacity="0.2019"></stop>
                <stop offset="0.6435" stop-color="#FFBF4E" stop-opacity="0.4827"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint153_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.1841 9.51502) rotate(-33.2557) scale(0.221395 0.164303)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint154_linear" x1="10.351" y1="9.19773" x2="10.4094" y2="9.38524"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint155_linear" x1="10.2904" y1="9.25659" x2="10.3335" y2="9.26193"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint156_linear" x1="10.374" y1="9.20579" x2="10.4591" y2="9.32535"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint157_linear" x1="10.4065" y1="9.32969" x2="10.3418" y2="9.1156"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint158_linear" x1="10.3616" y1="8.99791" x2="10.3901" y2="9.14331"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint159_linear" x1="10.3096" y1="8.93314" x2="10.4129" y2="9.16415"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
            <radialGradient id="paint160_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.069 13.0007) scale(0.522525 0.522626)">
                <stop stop-color="#FFF9EB"></stop>
                <stop offset="0.1944" stop-color="#FFF7E5"></stop>
                <stop offset="0.4655" stop-color="#FFF2D2"></stop>
                <stop offset="0.7803" stop-color="#FFE9B5"></stop>
                <stop offset="1" stop-color="#FFE29C"></stop>
            </radialGradient>
            <radialGradient id="paint161_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14.4307 12.5562) scale(1.05902 1.05923)">
                <stop stop-color="#FFD748" stop-opacity="0"></stop>
                <stop offset="0.2692" stop-color="#FFD14A" stop-opacity="0.2019"></stop>
                <stop offset="0.6435" stop-color="#FFBF4E" stop-opacity="0.4827"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint162_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.112 12.9994) scale(0.495082)">
                <stop offset="0.873" stop-color="#FFE29A" stop-opacity="0"></stop>
                <stop offset="0.8997" stop-color="#FFDD94" stop-opacity="0.1578"></stop>
                <stop offset="0.937" stop-color="#FFCD81" stop-opacity="0.3778"></stop>
                <stop offset="0.9802" stop-color="#FFB464" stop-opacity="0.6332"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <linearGradient id="paint163_linear" x1="14.943" y1="13.1423" x2="15.7932" y2="12.5643"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0322279" stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD15F"></stop>
            </linearGradient>
            <linearGradient id="paint164_linear" x1="14.7748" y1="12.6111" x2="16.2101" y2="13.9186"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD97C"></stop>
            </linearGradient>
            <radialGradient id="paint165_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14.9778 12.4636) scale(0.790585 0.79074)">
                <stop stop-color="#FFCB4B"></stop>
                <stop offset="1" stop-color="#FFDE8C" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint166_linear" x1="15.2295" y1="13.056" x2="15.977" y2="13.4202"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF0CB" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#FFD97C"></stop>
            </linearGradient>
            <radialGradient id="paint167_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.1242 12.8183) scale(0.747542 0.747687)">
                <stop stop-color="#FFD748" stop-opacity="0"></stop>
                <stop offset="0.2692" stop-color="#FFD14A" stop-opacity="0.2019"></stop>
                <stop offset="0.6435" stop-color="#FFBF4E" stop-opacity="0.4827"></stop>
                <stop offset="1" stop-color="#FFA754" stop-opacity="0.75"></stop>
            </radialGradient>
            <radialGradient id="paint168_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14.9553 12.7684) rotate(-33.2558) scale(0.221395 0.164303)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <linearGradient id="paint169_linear" x1="15.122" y1="12.451" x2="15.1804" y2="12.6385"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint170_linear" x1="15.0614" y1="12.5098" x2="15.1045" y2="12.5152"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDBC2B" stop-opacity="0"></stop>
                <stop offset="0.2611" stop-color="#FCCC37" stop-opacity="0.5328"></stop>
                <stop offset="0.5638" stop-color="#FCCE38" stop-opacity="0.75"></stop>
                <stop offset="0.6703" stop-color="#FCCC31" stop-opacity="0.567"></stop>
                <stop offset="0.8221" stop-color="#FAC71F" stop-opacity="0.3059"></stop>
                <stop offset="1" stop-color="#F8BE00" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint171_linear" x1="15.145" y1="12.459" x2="15.2301" y2="12.5786"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBC47"></stop>
                <stop offset="0.9996" stop-color="#FF8000"></stop>
            </linearGradient>
            <linearGradient id="paint172_linear" x1="15.1775" y1="12.5829" x2="15.1128" y2="12.3688"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.4439" stop-color="#AD5B24" stop-opacity="0.5"></stop>
                <stop offset="0.7729" stop-color="#C86F34" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint173_linear" x1="15.1326" y1="12.2512" x2="15.1611" y2="12.3966"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#A3541E"></stop>
                <stop offset="0.9996" stop-color="#643800"></stop>
            </linearGradient>
            <linearGradient id="paint174_linear" x1="15.0806" y1="12.1864" x2="15.1839" y2="12.4174"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAAF5C"></stop>
                <stop offset="0.9996" stop-color="#975500"></stop>
            </linearGradient>
        </defs>
    </g>
</svg>
    `,
    preview:
      "https://ik.imagekit.io/kz4jyfhac/assets/elements/elements/xmas-tree-svgrepo-com.png?updatedAt=1746635184389",
  },
]
