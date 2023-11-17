import { useState } from 'react'
import './App.css'
import ResultContainer from './result-container';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'> 
        <svg className='logo-img' xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
    <path d="M19.0004 0.641788C18.6608 0.641788 18.3162 0.644367 17.9791 0.664757C17.2238 0.70632 16.4812 0.81007 15.7529 0.940148C15.6723 0.954523 15.5923 0.970617 15.512 0.986085C15.443 0.999367 15.374 1.0064 15.3054 1.02046C15.2671 1.0271 15.2288 1.0353 15.1907 1.04343C15.1526 1.05155 15.1141 1.05804 15.0759 1.0664C14.6747 1.15382 14.2734 1.25155 13.8825 1.36476C13.8442 1.37554 13.8059 1.3878 13.7677 1.39913C13.748 1.40499 13.73 1.41593 13.7104 1.4221C13.6537 1.43905 13.5946 1.45046 13.5382 1.46796C13.4305 1.50444 13.3248 1.54687 13.2169 1.58273C12.9898 1.65812 12.763 1.72827 12.5398 1.81226C12.5123 1.82046 12.487 1.83702 12.4595 1.84663C12.122 1.97546 11.7889 2.12335 11.4613 2.27124C11.128 2.42155 10.7966 2.57241 10.4744 2.74171C10.1516 2.91199 9.83401 3.09183 9.52195 3.28101C9.50727 3.28984 9.49094 3.29515 9.47578 3.30398C9.1798 3.48309 8.88898 3.67058 8.60367 3.86624C8.13023 4.19202 7.67789 4.54296 7.23805 4.91046C7.07108 5.04905 6.9066 5.19061 6.74469 5.33507C6.71484 5.36202 6.68281 5.38819 6.65289 5.41538C6.47992 5.57265 6.31477 5.73359 6.14797 5.89741C6.12492 5.91999 6.10234 5.94343 6.07914 5.96616C5.85117 6.1921 5.62937 6.41718 5.41352 6.65468C5.2832 6.7978 5.16 6.94358 5.03484 7.09077C4.90992 7.2371 4.78797 7.38804 4.66766 7.53827C4.42457 7.84065 4.19112 8.15065 3.96766 8.4678C3.82445 8.67179 3.68953 8.87741 3.55461 9.08741C3.54109 9.10788 3.52195 9.12413 3.50844 9.14484C3.48136 9.18671 3.45456 9.22877 3.42805 9.27101C3.41789 9.2871 3.40383 9.3007 3.39367 9.31695C3.36109 9.36929 3.33336 9.4246 3.30195 9.47757C3.18052 9.68249 3.06192 9.88907 2.94617 10.0973C2.91805 10.1481 2.88227 10.1952 2.85437 10.2465V10.2578C2.71484 10.5151 2.58016 10.7737 2.45281 11.0381C2.32648 11.3006 2.21109 11.5619 2.09711 11.8299C2.065 11.9052 2.03625 11.9836 2.00523 12.0594C1.93602 12.2274 1.8632 12.394 1.79867 12.5644C1.76305 12.6594 1.72953 12.7554 1.69539 12.8512C1.66811 12.9275 1.64134 13.004 1.61508 13.0807H1.60367C1.56922 13.1822 1.54461 13.2884 1.51188 13.3905C1.50234 13.4205 1.49836 13.4523 1.48922 13.4823C1.48297 13.5021 1.47227 13.5199 1.46641 13.5398C1.4268 13.673 1.39023 13.8071 1.35164 13.9413V13.9528C1.34578 13.9687 1.33328 13.9825 1.32891 13.9987C1.31492 14.0476 1.30797 14.0987 1.29438 14.148C1.2518 14.3038 1.2068 14.4609 1.1682 14.6184C1.1568 14.6644 1.14477 14.7101 1.13367 14.7561C1.11938 14.8166 1.11273 14.8791 1.09914 14.9397C1.0444 15.1834 0.994679 15.4283 0.95 15.6741C0.943437 15.709 0.933125 15.7425 0.926875 15.7774C0.922891 15.7928 0.918047 15.8079 0.915469 15.8233C0.880234 16.0259 0.852344 16.2266 0.823672 16.4315C0.823672 16.4432 0.81375 16.4539 0.812344 16.466C0.801641 16.5435 0.787734 16.6176 0.777813 16.6955H0.789141C0.756843 16.955 0.730066 17.2151 0.708828 17.4758C0.704922 17.5026 0.699688 17.5292 0.6975 17.5561H0.686094C0.673594 17.7153 0.670312 17.8776 0.663437 18.0381C0.663437 18.0459 0.66375 18.0535 0.663437 18.0609C0.663203 18.0648 0.663516 18.0686 0.663437 18.0723C0.647969 18.3814 0.640625 18.6887 0.640625 19.0017V19.0131C0.640781 19.3261 0.647969 19.6334 0.663359 19.9426C0.663516 19.9465 0.663203 19.9503 0.663359 19.954C0.674375 20.1843 0.689844 20.4145 0.709219 20.6424C0.715469 20.7151 0.725391 20.7875 0.732031 20.8604V20.9063C0.738594 20.9755 0.747031 21.0446 0.754687 21.113C0.770547 21.252 0.792891 21.3885 0.812109 21.526C0.827969 21.641 0.840078 21.756 0.858047 21.8702C0.861953 21.893 0.865781 21.9162 0.869375 21.9391C0.912344 22.2069 0.952734 22.4672 1.00711 22.7309C1.06609 23.0153 1.13016 23.3008 1.20219 23.5801C1.20609 23.5846 1.21133 23.5871 1.21352 23.5915V23.6029C1.28094 23.8623 1.35336 24.1166 1.43148 24.3717C1.44109 24.403 1.45617 24.4323 1.46609 24.4635C1.53922 24.6948 1.61469 24.9243 1.69555 25.152C1.70547 25.1796 1.72016 25.2049 1.73008 25.2323C1.75469 25.3005 1.77352 25.371 1.79883 25.4389C1.84366 25.5579 1.88958 25.6765 1.93656 25.7947C1.98391 25.9134 2.03617 26.0329 2.08578 26.1503C2.20148 26.4249 2.32391 26.6965 2.45297 26.9651C2.56398 27.1963 2.6768 27.4284 2.79727 27.6535C2.81586 27.6884 2.83555 27.7223 2.85461 27.7569V27.7682C2.95914 27.9607 3.065 28.1422 3.17594 28.3305C3.21586 28.3976 3.26164 28.4597 3.30219 28.5255C3.40117 28.6862 3.4968 28.8482 3.60055 29.0076C3.62305 29.042 3.64664 29.0763 3.6693 29.1108C3.76227 29.2514 3.85961 29.386 3.95625 29.5239C3.99844 29.5847 4.03938 29.6472 4.0825 29.7075C4.14969 29.8011 4.22 29.8906 4.28898 29.9829C4.38898 30.1171 4.48391 30.2537 4.58742 30.3845C4.59914 30.3992 4.61047 30.4154 4.62172 30.4305C4.67742 30.5006 4.73711 30.5676 4.79383 30.6369C4.82258 30.6726 4.85633 30.7049 4.88562 30.7402C4.96727 30.8385 5.04266 30.942 5.12664 31.0387C5.2193 31.1454 5.31922 31.2444 5.41344 31.3484C5.50242 31.4466 5.58555 31.5501 5.67742 31.6468C5.68641 31.6567 5.70219 31.6601 5.7118 31.6699C5.81313 31.7762 5.91781 31.8759 6.02164 31.9797C6.09156 32.0512 6.15602 32.128 6.2282 32.1976C6.2743 32.243 6.31883 32.2908 6.36594 32.3354C6.45828 32.423 6.55703 32.5037 6.65266 32.5879C6.73414 32.6594 6.81234 32.7345 6.89375 32.8059C6.8993 32.8093 6.90102 32.8137 6.905 32.8173C6.97289 32.8767 7.04281 32.9309 7.11156 32.9894C7.21445 33.0769 7.31648 33.168 7.42141 33.2533C7.58914 33.3902 7.76523 33.5237 7.93773 33.6549C7.97258 33.6815 8.00609 33.7092 8.04094 33.7353C8.06289 33.7515 8.08773 33.765 8.10992 33.7812C8.3157 33.9331 8.51719 34.0852 8.72945 34.2287C8.94435 34.375 9.16245 34.5166 9.38359 34.6533C9.39547 34.6606 9.40609 34.6691 9.41797 34.676L9.47531 34.7105C9.61977 34.7984 9.76437 34.8791 9.91141 34.963C10.0213 35.0257 10.1331 35.0855 10.2442 35.1466C10.3132 35.1846 10.3809 35.2247 10.4508 35.2614C10.6329 35.3575 10.8156 35.4467 11.0016 35.5368C11.0122 35.5419 11.0252 35.543 11.0359 35.5482C11.1577 35.6062 11.2801 35.6644 11.4031 35.7203C11.4918 35.7607 11.5777 35.8075 11.667 35.8466C11.7269 35.8726 11.7896 35.8918 11.8505 35.9153C11.9052 35.9363 11.9573 35.9619 12.0113 35.9843C12.1934 36.0593 12.3769 36.1329 12.5621 36.2023C12.6038 36.218 12.6464 36.2327 12.6883 36.2482C12.6995 36.2521 12.7114 36.2555 12.7227 36.2595C12.7305 36.2634 12.7378 36.268 12.7457 36.2709C12.9354 36.3397 13.127 36.4034 13.3195 36.4659C13.3724 36.4831 13.427 36.495 13.4802 36.5119L13.6294 36.5577C13.7252 36.5874 13.8194 36.6218 13.9162 36.6495C14.0798 36.6966 14.2441 36.7447 14.4096 36.7873C14.6523 36.8499 14.8976 36.9066 15.144 36.9594C15.1784 36.9667 15.2127 36.9751 15.2473 36.9822C15.2895 36.991 15.3315 36.9969 15.3735 37.0048C15.6483 37.0601 15.9208 37.1114 16.1998 37.1541C16.45 37.1924 16.7037 37.2178 16.9571 37.2458C16.9841 37.2498 17.0105 37.2547 17.0373 37.2573C17.1059 37.2645 17.1753 37.2737 17.244 37.2799C17.2901 37.2845 17.336 37.2877 17.3817 37.2913C17.5571 37.3068 17.7327 37.3155 17.9095 37.3259C17.9591 37.3292 18.0091 37.3347 18.0587 37.3373C18.1503 37.3418 18.2422 37.3453 18.3341 37.3486C18.5562 37.3567 18.7755 37.36 18.9997 37.36C19.3166 37.36 19.6277 37.353 19.9406 37.3369C20.2499 37.3214 20.5535 37.2987 20.8586 37.268H20.8812C21.0947 37.246 21.3125 37.2168 21.5237 37.1877C21.6733 37.1667 21.8225 37.1437 21.9714 37.1188C22.0254 37.1101 22.0783 37.1053 22.132 37.0962C22.2016 37.084 22.2691 37.0744 22.3385 37.0616C22.5635 37.0201 22.7934 36.9736 23.0155 36.9239C23.0616 36.9136 23.1075 36.9 23.1533 36.8894C23.2809 36.86 23.4061 36.8281 23.532 36.7976C23.559 36.791 23.5855 36.7814 23.6123 36.7748C23.65 36.7652 23.6895 36.7619 23.727 36.7521C23.7998 36.7326 23.8726 36.715 23.945 36.6947C24.0102 36.6767 24.0751 36.6562 24.1401 36.6373C24.2484 36.6057 24.3539 36.5671 24.4614 36.5341C24.5412 36.5094 24.6231 36.4911 24.7023 36.4651C24.7102 36.4618 24.717 36.4564 24.7255 36.4538C24.921 36.3896 25.1179 36.3179 25.3106 36.2473L25.4942 36.1783C25.5638 36.1519 25.6318 36.1251 25.7008 36.098C25.9444 36.0026 26.1854 35.8937 26.4237 35.7882C26.4615 35.7718 26.501 35.7593 26.5385 35.7423L26.6418 35.6965C26.948 35.5557 27.2503 35.4065 27.5483 35.249C28.2139 34.8982 28.8505 34.5055 29.4647 34.0784C29.6388 33.9573 29.8113 33.8381 29.9811 33.7112L30.1188 33.608C30.1508 33.5834 30.1784 33.5525 30.2105 33.5276C30.3914 33.3878 30.5745 33.2494 30.7498 33.103C31.1427 32.7747 31.5217 32.4301 31.8859 32.0703C31.9056 32.0512 31.9242 32.0322 31.9433 32.0129C31.9545 32.0016 31.9664 31.9902 31.9777 31.9784C32.1654 31.7912 32.349 31.5999 32.5284 31.4047C32.547 31.3848 32.5678 31.3673 32.5858 31.3473C32.9445 30.9526 33.2834 30.5328 33.607 30.108C33.7767 29.8861 33.9412 29.6603 34.1005 29.4309C34.2835 29.1665 34.4592 28.9019 34.6284 28.6276C34.6503 28.5927 34.6756 28.5593 34.6972 28.5244C34.7593 28.4222 34.8206 28.318 34.8808 28.2145C34.964 28.0773 35.045 27.9422 35.1218 27.8015C35.1285 27.7894 35.1382 27.7791 35.1449 27.7669V27.7555C35.2902 27.488 35.4257 27.2163 35.558 26.9409C35.6798 26.6862 35.8031 26.4213 35.9137 26.1605V26.1491C35.9283 26.1146 35.9452 26.0804 35.9598 26.0459C36.0612 25.8033 36.1569 25.5585 36.2468 25.3115C36.2772 25.2283 36.298 25.1427 36.327 25.0591C36.3829 24.8992 36.4365 24.7385 36.4877 24.577C36.5674 24.3266 36.648 24.0747 36.7172 23.8198C36.7858 23.567 36.843 23.3077 36.9008 23.0509C36.9685 22.7504 37.0316 22.4502 37.0844 22.1443V22.133C37.1272 21.8847 37.1665 21.6387 37.1992 21.3871C37.207 21.3258 37.2149 21.2648 37.2217 21.2035C37.2549 20.9237 37.2813 20.6379 37.302 20.3543C37.3335 19.9217 37.3583 19.4866 37.3594 19.0462V19.0003C37.3594 17.8384 37.2445 16.7056 37.038 15.6037C37.0195 15.5045 37.0009 15.4037 36.9807 15.3052C36.9604 15.2054 36.934 15.1062 36.9118 15.0069C36.6571 13.8601 36.3028 12.7456 35.8446 11.6906C35.8058 11.601 35.7595 11.5151 35.7184 11.4267C35.6601 11.3009 35.6061 11.173 35.5462 11.048C35.535 11.0248 35.5227 11.0025 35.5119 10.9791V10.9676C35.3948 10.7262 35.2716 10.4918 35.1447 10.2562V10.2448C35.0221 10.0191 34.8862 9.79897 34.7545 9.57913C34.7359 9.54851 34.7157 9.51796 34.6972 9.48741C34.6916 9.48507 34.7028 9.47765 34.6972 9.47593C34.5788 9.28101 34.4554 9.09234 34.33 8.90218C34.0153 8.42385 33.6783 7.96053 33.3202 7.51374C32.9809 7.09132 32.6163 6.68788 32.2416 6.29734C32.2303 6.28569 32.2184 6.27452 32.2072 6.26296L32.1841 6.23999C31.9969 6.04648 31.8059 5.8628 31.6104 5.67765C31.0389 5.13671 30.4345 4.62757 29.7973 4.16296C29.3862 3.86319 28.971 3.57929 28.5351 3.31374C28.5295 3.31124 28.5283 3.30499 28.5238 3.30234C28.181 3.09405 27.8252 2.90312 27.4681 2.71718C27.1998 2.57734 26.9293 2.44218 26.6534 2.31546C26.3789 2.18944 26.0972 2.07249 25.8157 1.95976C25.8079 1.9564 25.8005 1.9514 25.7927 1.94827C24.9462 1.61077 24.0679 1.33179 23.1648 1.1221C23.1344 1.11499 23.1038 1.10624 23.073 1.09913C22.963 1.07413 22.851 1.05327 22.7402 1.0303C22.5801 0.99724 22.4194 0.966637 22.2583 0.938507C21.8175 0.859445 21.3782 0.790382 20.9272 0.743429C20.6293 0.712335 20.3225 0.679679 20.0206 0.663039C19.9981 0.661945 19.9745 0.66421 19.9519 0.663039H19.9405C19.6271 0.647437 19.3134 0.639804 18.9996 0.640148L19.0004 0.641788ZM17.784 2.34015C18.2797 2.40187 18.7754 2.46905 19.2758 2.53523C20.9999 2.76304 22.6363 2.97155 24.1757 3.10898C25.7723 3.62851 27.2601 4.38812 28.605 5.33515C27.3361 5.41843 25.9853 5.45101 24.5544 5.39249C22.6451 5.31202 20.6598 5.09148 18.6791 4.83023C17.2791 4.64554 15.9581 4.44913 14.6857 4.29085C13.6824 4.16576 12.6761 4.0663 11.6677 3.99257C13.538 3.0771 15.6013 2.4971 17.784 2.34015ZM11.1973 6.20726C12.4814 6.22226 13.8126 6.30609 15.1677 6.43671C16.5227 6.56741 17.89 6.74702 19.2758 6.93015C21.2364 7.18929 23.0879 7.43023 24.8068 7.56132C26.7073 7.70882 28.4952 7.73046 30.1084 7.68749C30.508 7.67687 30.888 7.66069 31.2559 7.64163C31.7274 8.15007 32.158 8.69546 32.564 9.2596C31.8861 9.38085 31.1738 9.49319 30.3837 9.58093C28.6462 9.7739 26.6699 9.87405 24.5544 9.78749C22.6451 9.70702 20.6598 9.48648 18.6791 9.22515C17.2791 9.04054 15.9581 8.84405 14.6857 8.68585C13.4133 8.52765 12.193 8.40984 11.0481 8.34163C10.2362 8.29109 9.44977 8.26679 8.6957 8.26132C7.94164 8.25585 7.21797 8.26913 6.53836 8.29569C6.40078 8.30132 6.2807 8.31194 6.14828 8.31866C6.74625 7.60038 7.41313 6.93085 8.12195 6.32202C9.14477 6.23641 10.171 6.19809 11.1973 6.20718L11.1973 6.20726ZM11.1973 10.6022C12.4814 10.6172 13.8126 10.7011 15.1677 10.8317C16.5227 10.9623 17.89 11.142 19.2758 11.3251C21.2364 11.5843 23.0879 11.8251 24.8068 11.9562C26.7073 12.1038 28.4952 12.1254 30.1084 12.0825C31.6175 12.0423 32.9538 11.953 34.1016 11.853C34.3136 12.2998 34.5145 12.751 34.6868 13.2186C33.503 13.517 32.059 13.8012 30.3837 13.9873C28.6462 14.1802 26.6699 14.2691 24.5544 14.1824C24.2362 14.1691 23.913 14.1569 23.5904 14.1366C22.3902 13.0032 20.7814 12.3005 19.0004 12.3005C17.7734 12.3005 16.6273 12.6313 15.6382 13.2071C15.321 13.1629 15.0035 13.1208 14.6857 13.0809C13.4132 12.9226 12.193 12.8048 11.0481 12.7366C10.2362 12.6861 9.44977 12.6618 8.6957 12.6562C7.94164 12.6507 7.21797 12.6641 6.53836 12.6906C5.36922 12.7366 4.3468 12.8246 3.44008 12.9087C3.65609 12.3574 3.90336 11.8231 4.17445 11.3022C4.80305 11.1622 5.47031 11.029 6.21711 10.9235C7.68094 10.7168 9.37203 10.5852 11.1973 10.6022H11.1973ZM11.1973 14.9972C11.9646 15.006 12.7535 15.0461 13.5496 15.1005C13.0914 15.7401 12.7511 16.4662 12.5398 17.2463C12.0433 17.1993 11.546 17.161 11.0481 17.1315C9.42422 17.0305 7.89758 17.0323 6.53836 17.0857C5.17914 17.1391 3.97977 17.2518 2.98109 17.3496C2.75492 17.3716 2.57594 17.3865 2.37289 17.4069C2.41508 16.9605 2.47984 16.5228 2.55648 16.0873C3.54656 15.8028 4.77422 15.5222 6.21711 15.3185C7.68094 15.1118 9.37203 14.9801 11.1973 14.9972H11.1973ZM35.4557 16.1217C35.5268 16.5305 35.5756 16.9426 35.6163 17.3611C35.3695 17.4334 35.108 17.5062 34.8246 17.5791C33.6175 17.8896 32.1212 18.1893 30.3837 18.3823C28.9598 18.5405 27.3691 18.6301 25.679 18.6118C25.6333 17.8236 25.4571 17.0776 25.1625 16.3857C26.9285 16.5089 28.5979 16.5176 30.1083 16.4775C31.7213 16.4345 33.1579 16.333 34.3541 16.225C34.778 16.1867 35.1047 16.1546 35.4557 16.1217ZM11.1973 19.3922C11.5666 19.3966 11.9446 19.4216 12.3218 19.438C12.3725 20.2279 12.5603 20.9724 12.8612 21.6642C12.2401 21.6048 11.633 21.5613 11.0481 21.5266C9.42422 21.4255 7.89758 21.4273 6.53836 21.4806C5.17914 21.534 3.97977 21.6353 2.98109 21.733C2.79437 21.7514 2.67812 21.7657 2.53352 21.779C2.46452 21.368 2.41094 20.9546 2.37289 20.5396C2.42133 20.5246 2.46023 20.5084 2.51063 20.4937C3.50805 20.2049 4.75312 19.9201 6.21711 19.7134C7.68109 19.5067 9.37203 19.3751 11.1973 19.3922ZM35.6393 20.4937C35.6005 20.9355 35.5399 21.3708 35.4672 21.8019C35.2617 21.8623 35.0537 21.9266 34.8246 21.9855C33.6175 22.296 32.1212 22.5843 30.3837 22.7773C28.6462 22.9704 26.6699 23.0591 24.5544 22.9723C24.5014 22.9684 24.4476 22.9636 24.3938 22.961C24.8715 22.311 25.2416 21.5798 25.4609 20.7807C27.1155 20.8881 28.6837 20.9219 30.1083 20.884C31.7213 20.8411 33.1579 20.728 34.3541 20.6201C34.8565 20.5748 35.2354 20.5331 35.6393 20.4938V20.4937ZM11.1973 23.7871C12.2693 23.7996 13.3778 23.8633 14.5021 23.9593C15.6922 25.0408 17.2655 25.7035 19.0004 25.7035C20.1625 25.7035 21.2491 25.4092 22.202 24.8887C23.0989 24.9961 23.97 25.0888 24.8068 25.1526C26.7073 25.3001 28.4952 25.3105 30.1084 25.2674C31.7215 25.2244 33.1579 25.1228 34.3541 25.015L34.6065 24.9919C34.3943 25.5448 34.1398 26.0755 33.8721 26.5984C32.858 26.8234 31.6947 27.0265 30.3837 27.1722C28.6462 27.365 26.6699 27.4537 24.5544 27.3672C22.6451 27.2868 20.6598 27.0661 18.6791 26.8049C17.2791 26.6202 15.9581 26.4238 14.6857 26.2656C13.4133 26.1074 12.193 26.0009 11.0481 25.9328C10.2362 25.8823 9.44977 25.8465 8.6957 25.841C7.94164 25.8355 7.21797 25.8601 6.53836 25.8869C5.54195 25.926 4.66898 25.9901 3.86461 26.0591C3.65391 25.6078 3.44992 25.1541 3.27945 24.682C4.12516 24.4655 5.10344 24.2655 6.21711 24.1083C7.68094 23.9016 9.37203 23.77 11.1973 23.7869V23.7871ZM11.1973 28.1821C12.4814 28.1968 13.8126 28.2809 15.1677 28.4116C16.5227 28.5423 17.89 28.7333 19.2758 28.9166C21.2364 29.1756 23.0879 29.4052 24.8068 29.5361C26.7073 29.6837 28.4952 29.7053 30.1084 29.6624C30.7169 29.6461 31.3252 29.6193 31.9328 29.582C31.3297 30.3175 30.6657 31.0009 29.9477 31.6247C28.3164 31.7842 26.498 31.8419 24.5544 31.7623C22.6451 31.6819 20.6598 31.4726 18.6791 31.2116C17.2791 31.0268 15.9581 30.8189 14.6857 30.6608C13.4132 30.5024 12.193 30.3847 11.0481 30.3165C10.2362 30.266 9.44977 30.253 8.6957 30.2476C7.98672 30.2426 7.30844 30.2476 6.66461 30.2704C6.19453 29.7562 5.75992 29.211 5.35648 28.6409C5.63453 28.5931 5.91844 28.5454 6.21711 28.5033C7.68102 28.2965 9.37203 28.1648 11.1973 28.1819V28.1821ZM10.0498 32.5886C10.4234 32.5787 10.8101 32.5852 11.1973 32.5886C12.4814 32.6033 13.8126 32.6873 15.1677 32.818C16.5227 32.9485 17.89 33.1169 19.2758 33.3C21.2364 33.5592 23.0879 33.8001 24.8068 33.9312C25.317 33.9708 25.8105 33.9971 26.2985 34.023C24.2347 35.0276 21.9376 35.626 19.5053 35.6983C19.2293 35.6638 18.9552 35.6314 18.6791 35.595C17.2791 35.4104 15.9581 35.2253 14.6857 35.0672C14.522 35.0466 14.3652 35.0288 14.2038 35.0098C12.435 34.4805 10.7959 33.6577 9.3268 32.6115C9.56563 32.5998 9.80312 32.5949 10.0498 32.5887V32.5886Z" fill="#B3D3F1"/>
        </svg>

        <h1>
          Body Mass 
          <br/>
          Index Calculator 
        </h1>

        <p className='header-p'>  Better   understand your weight in relation to your height using our 
        body mass index (BM) calculator. While BMI is not the sole determinant 
        of a healthy weight, it offers a valuable starting point to evaluate 
        your overall health and well-being.
        </p>

      </header>

      <div className='bmi-calculator-container'>
        <h3> Enter your details below</h3>

        <div className='unit-container'>
         <button className='unit-btn'>Metric</button>
         <button className='unit-btn'> Imperial</button>
        </div>

        <div className='height-weight-input-container'>
          <div className='input-container'>
            <label for="height">Height</label>
            <br/>
            <input type='number' id='height'></input>
          </div>

          <br/>

          <div className='input-container'>
            <label for="weight">Weight</label>
            <br/>
            <input type='number' id='weight'></input>
            </div>
        </div>

      
        <div className='imperial-unit-container'>
          <div className='input-container-two'>
            <label className='label-two' for="height">Height</label>
            <br/>
            <div className='imperial-ft-in-container'>
              <input className='imperial-input' type='number' id='feet'></input>
              <input className='imperial-input' type='number' id='inches'></input>
            </div> 
          </div>
          <br/>       
            <div className='input-container-two'>
            <label className='label-two' for="weight">Weight</label>
              <br/>
              <div className='imperial-ft-in-container'>
                <input className='imperial-input' type='number' id='feet'></input>
                <input className='imperial-input' type='number' id='inches'></input>
              </div> 
            </div>
        </div>
        <br/>
        <br/>
        <ResultContainer/>
      </div>
     
    </>
  )
}


export default App;
