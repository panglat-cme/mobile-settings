import { Injectable } from 'angular2/core';
import { Country } from '../models/country';

@Injectable()
export class CountryService {
	countryList : Location[];
	
	getCountryList = () => this.countryList;
  
  	constructor() {
		this.countryList = [
			{ geonameId: 1149361 , name: 'Aland Islands' },
			{ geonameId: 661882 , name: 'Albania' },
			{ geonameId: 783754 , name: 'Algeria' },
			{ geonameId: 2589581 , name: 'American Samoa' },
			{ geonameId: 5880801 , name: 'Andorra' },
			{ geonameId: 3041565 , name: 'Angola' },
			{ geonameId: 3351879 , name: 'Anguilla' },
			{ geonameId: 3573511 , name: 'Antarctica' },
			{ geonameId: 6697173 , name: 'Antigua and Barbuda' },
			{ geonameId: 3576396 , name: 'Argentina' },
			{ geonameId: 3865483 , name: 'Armenia' },
			{ geonameId: 174982 , name: 'Aruba' },
			{ geonameId: 3577279 , name: 'Australia' },
			{ geonameId: 2077456 , name: 'Austria' },
			{ geonameId: 2782113 , name: 'Azerbaijan' },
			{ geonameId: 587116 , name: 'Bahamas' },
			{ geonameId: 3572887 , name: 'Bahrain' },
			{ geonameId: 290291 , name: 'Bangladesh' },
			{ geonameId: 1210997 , name: 'Barbados' },
			{ geonameId: 3374084 , name: 'Belarus' },
			{ geonameId: 630336 , name: 'Belgium' },
			{ geonameId: 2802361 , name: 'Belize' },
			{ geonameId: 3582678 , name: 'Benin' },
			{ geonameId: 2395170 , name: 'Bermuda' },
			{ geonameId: 3573345 , name: 'Bhutan' },
			{ geonameId: 1252634 , name: 'Bolivia' },
			{ geonameId: 3923057 , name: 'Bonaire, Saint Eustatius and Saba ' },
			{ geonameId: 7626844 , name: 'Bosnia and Herzegovina' },
			{ geonameId: 3277605 , name: 'Botswana' },
			{ geonameId: 933860 , name: 'Bouvet Island' },
			{ geonameId: 3371123 , name: 'Brazil' },
			{ geonameId: 3469034 , name: 'British Indian Ocean Territory' },
			{ geonameId: 1282588 , name: 'British Virgin Islands' },
			{ geonameId: 3577718 , name: 'Brunei' },
			{ geonameId: 1820814 , name: 'Bulgaria' },
			{ geonameId: 732800 , name: 'Burkina Faso' },
			{ geonameId: 2361809 , name: 'Burundi' },
			{ geonameId: 433561 , name: 'Cambodia' },
			{ geonameId: 1831722 , name: 'Cameroon' },
			{ geonameId: 2233387 , name: 'Canada' },
			{ geonameId: 6251999 , name: 'Cape Verde' },
			{ geonameId: 3374766 , name: 'Cayman Islands' },
			{ geonameId: 3580718 , name: 'Central African Republic' },
			{ geonameId: 239880 , name: 'Chad' },
			{ geonameId: 2434508 , name: 'Chile' },
			{ geonameId: 3895114 , name: 'China' },
			{ geonameId: 1814991 , name: 'Christmas Island' },
			{ geonameId: 2078138 , name: 'Cocos Islands' },
			{ geonameId: 1547376 , name: 'Colombia' },
			{ geonameId: 3686110 , name: 'Comoros' },
			{ geonameId: 921929 , name: 'Cook Islands' },
			{ geonameId: 1899402 , name: 'Costa Rica' },
			{ geonameId: 3624060 , name: 'Croatia' },
			{ geonameId: 3202326 , name: 'Cuba' },
			{ geonameId: 3562981 , name: 'Curacao' },
			{ geonameId: 7626836 , name: 'Cyprus' },
			{ geonameId: 146669 , name: 'Czechia' },
			{ geonameId: 3077311 , name: 'Democratic Republic of the Congo' },
			{ geonameId: 203312 , name: 'Denmark' },
			{ geonameId: 2623032 , name: 'Djibouti' },
			{ geonameId: 223816 , name: 'Dominica' },
			{ geonameId: 3575830 , name: 'Dominican Republic' },
			{ geonameId: 3508796 , name: 'East Timor' },
			{ geonameId: 1966436 , name: 'Ecuador' },
			{ geonameId: 3658394 , name: 'Egypt' },
			{ geonameId: 357994 , name: 'El Salvador' },
			{ geonameId: 3585968 , name: 'Equatorial Guinea' },
			{ geonameId: 2309096 , name: 'Eritrea' },
			{ geonameId: 338010 , name: 'Estonia' },
			{ geonameId: 453733 , name: 'Ethiopia' },
			{ geonameId: 337996 , name: 'Falkland Islands' },
			{ geonameId: 3474414 , name: 'Faroe Islands' },
			{ geonameId: 2622320 , name: 'Fiji' },
			{ geonameId: 2205218 , name: 'Finland' },
			{ geonameId: 660013 , name: 'France' },
			{ geonameId: 3017382 , name: 'French Guiana' },
			{ geonameId: 3381670 , name: 'French Polynesia' },
			{ geonameId: 4030656 , name: 'French Southern Territories' },
			{ geonameId: 1546748 , name: 'Gabon' },
			{ geonameId: 2400553 , name: 'Gambia' },
			{ geonameId: 2413451 , name: 'Georgia' },
			{ geonameId: 614540 , name: 'Germany' },
			{ geonameId: 2921044 , name: 'Ghana' },
			{ geonameId: 2300660 , name: 'Gibraltar' },
			{ geonameId: 2411586 , name: 'Greece' },
			{ geonameId: 390903 , name: 'Greenland' },
			{ geonameId: 3425505 , name: 'Grenada' },
			{ geonameId: 3580239 , name: 'Guadeloupe' },
			{ geonameId: 3579143 , name: 'Guam' },
			{ geonameId: 4043988 , name: 'Guatemala' },
			{ geonameId: 3595528 , name: 'Guernsey' },
			{ geonameId: 3042362 , name: 'Guinea' },
			{ geonameId: 2420477 , name: 'Guinea-Bissau' },
			{ geonameId: 2372248 , name: 'Guyana' },
			{ geonameId: 3378535 , name: 'Haiti' },
			{ geonameId: 3723988 , name: 'Heard Island and McDonald Islands' },
			{ geonameId: 1547314 , name: 'Honduras' },
			{ geonameId: 3608932 , name: 'Hong Kong' },
			{ geonameId: 1819730 , name: 'Hungary' },
			{ geonameId: 719819 , name: 'Iceland' },
			{ geonameId: 2629691 , name: 'India' },
			{ geonameId: 1269750 , name: 'Indonesia' },
			{ geonameId: 1643084 , name: 'Iran' },
			{ geonameId: 130758 , name: 'Iraq' },
			{ geonameId: 99237 , name: 'Ireland' },
			{ geonameId: 2963597 , name: 'Isle of Man' },
			{ geonameId: 3042225 , name: 'Israel' },
			{ geonameId: 294640 , name: 'Italy' },
			{ geonameId: 3175395 , name: 'Ivory Coast' },
			{ geonameId: 2287781 , name: 'Jamaica' },
			{ geonameId: 3489940 , name: 'Japan' },
			{ geonameId: 1861060 , name: 'Jersey' },
			{ geonameId: 3042142 , name: 'Jordan' },
			{ geonameId: 248816 , name: 'Kazakhstan' },
			{ geonameId: 1522867 , name: 'Kenya' },
			{ geonameId: 192950 , name: 'Kiribati' },
			{ geonameId: 4030945 , name: 'Kosovo' },
			{ geonameId: 831053 , name: 'Kuwait' },
			{ geonameId: 285570 , name: 'Kyrgyzstan' },
			{ geonameId: 1527747 , name: 'Laos' },
			{ geonameId: 1655842 , name: 'Latvia' },
			{ geonameId: 458258 , name: 'Lebanon' },
			{ geonameId: 272103 , name: 'Lesotho' },
			{ geonameId: 932692 , name: 'Liberia' },
			{ geonameId: 2275384 , name: 'Libya' },
			{ geonameId: 2215636 , name: 'Liechtenstein' },
			{ geonameId: 3042058 , name: 'Lithuania' },
			{ geonameId: 597427 , name: 'Luxembourg' },
			{ geonameId: 2960313 , name: 'Macao' },
			{ geonameId: 1821275 , name: 'Macedonia' },
			{ geonameId: 718075 , name: 'Madagascar' },
			{ geonameId: 1062947 , name: 'Malawi' },
			{ geonameId: 927384 , name: 'Malaysia' },
			{ geonameId: 1733045 , name: 'Maldives' },
			{ geonameId: 1282028 , name: 'Mali' },
			{ geonameId: 2453866 , name: 'Malta' },
			{ geonameId: 2562770 , name: 'Marshall Islands' },
			{ geonameId: 2080185 , name: 'Martinique' },
			{ geonameId: 3570311 , name: 'Mauritania' },
			{ geonameId: 2378080 , name: 'Mauritius' },
			{ geonameId: 934292 , name: 'Mayotte' },
			{ geonameId: 1024031 , name: 'Mexico' },
			{ geonameId: 3996063 , name: 'Micronesia' },
			{ geonameId: 2081918 , name: 'Moldova' },
			{ geonameId: 617790 , name: 'Monaco' },
			{ geonameId: 2993457 , name: 'Mongolia' },
			{ geonameId: 2029969 , name: 'Montenegro' },
			{ geonameId: 3194884 , name: 'Montserrat' },
			{ geonameId: 3578097 , name: 'Morocco' },
			{ geonameId: 2542007 , name: 'Mozambique' },
			{ geonameId: 1036973 , name: 'Myanmar' },
			{ geonameId: 1327865 , name: 'Namibia' },
			{ geonameId: 3355338 , name: 'Nauru' },
			{ geonameId: 2110425 , name: 'Nepal' },
			{ geonameId: 1282988 , name: 'Netherlands' },
			{ geonameId: 2750405 , name: 'Netherlands Antilles' },
			{ geonameId: 8505032 , name: 'New Caledonia' },
			{ geonameId: 2139685 , name: 'New Zealand' },
			{ geonameId: 2186224 , name: 'Nicaragua' },
			{ geonameId: 3617476 , name: 'Niger' },
			{ geonameId: 2440476 , name: 'Nigeria' },
			{ geonameId: 2328926 , name: 'Niue' },
			{ geonameId: 4036232 , name: 'Norfolk Island' },
			{ geonameId: 2155115 , name: 'North Korea' },
			{ geonameId: 1873107 , name: 'Northern Mariana Islands' },
			{ geonameId: 4041468 , name: 'Norway' },
			{ geonameId: 3144096 , name: 'Oman' },
			{ geonameId: 286963 , name: 'Pakistan' },
			{ geonameId: 1168579 , name: 'Palau' },
			{ geonameId: 1559582 , name: 'Palestinian Territory' },
			{ geonameId: 6254930 , name: 'Panama' },
			{ geonameId: 3703430 , name: 'Papua New Guinea' },
			{ geonameId: 2088628 , name: 'Paraguay' },
			{ geonameId: 3437598 , name: 'Peru' },
			{ geonameId: 3932488 , name: 'Philippines' },
			{ geonameId: 1694008 , name: 'Pitcairn' },
			{ geonameId: 4030699 , name: 'Poland' },
			{ geonameId: 798544 , name: 'Portugal' },
			{ geonameId: 2264397 , name: 'Puerto Rico' },
			{ geonameId: 4566966 , name: 'Qatar' },
			{ geonameId: 289688 , name: 'Republic of the Congo' },
			{ geonameId: 2260494 , name: 'Reunion' },
			{ geonameId: 935317 , name: 'Romania' },
			{ geonameId: 798549 , name: 'Russia' },
			{ geonameId: 2017370 , name: 'Rwanda' },
			{ geonameId: 49518 , name: 'Saint Barthelemy' },
			{ geonameId: 3578476 , name: 'Saint Helena' },
			{ geonameId: 3370751 , name: 'Saint Kitts and Nevis' },
			{ geonameId: 3575174 , name: 'Saint Lucia' },
			{ geonameId: 3576468 , name: 'Saint Martin' },
			{ geonameId: 3578421 , name: 'Saint Pierre and Miquelon' },
			{ geonameId: 3424932 , name: 'Saint Vincent and the Grenadines' },
			{ geonameId: 3577815 , name: 'Samoa' },
			{ geonameId: 4034894 , name: 'San Marino' },
			{ geonameId: 3168068 , name: 'Sao Tome and Principe' },
			{ geonameId: 2410758 , name: 'Saudi Arabia' },
			{ geonameId: 102358 , name: 'Senegal' },
			{ geonameId: 2245662 , name: 'Serbia' },
			{ geonameId: 6290252 , name: 'Serbia and Montenegro' },
			{ geonameId: 8505033 , name: 'Seychelles' },
			{ geonameId: 241170 , name: 'Sierra Leone' },
			{ geonameId: 2403846 , name: 'Singapore' },
			{ geonameId: 1880251 , name: 'Sint Maarten' },
			{ geonameId: 7609695 , name: 'Slovakia' },
			{ geonameId: 3057568 , name: 'Slovenia' },
			{ geonameId: 3190538 , name: 'Solomon Islands' },
			{ geonameId: 2103350 , name: 'Somalia' },
			{ geonameId: 51537 , name: 'South Africa' },
			{ geonameId: 953987 , name: 'South Georgia and the South Sandwich Islands' },
			{ geonameId: 3474415 , name: 'South Korea' },
			{ geonameId: 1835841 , name: 'South Sudan' },
			{ geonameId: 7909807 , name: 'Spain' },
			{ geonameId: 2510769 , name: 'Sri Lanka' },
			{ geonameId: 1227603 , name: 'Sudan' },
			{ geonameId: 366755 , name: 'Suriname' },
			{ geonameId: 3382998 , name: 'Svalbard and Jan Mayen' },
			{ geonameId: 607072 , name: 'Swaziland' },
			{ geonameId: 934841 , name: 'Sweden' },
			{ geonameId: 2661886 , name: 'Switzerland' },
			{ geonameId: 2658434 , name: 'Syria' },
			{ geonameId: 163843 , name: 'Taiwan' },
			{ geonameId: 1668284 , name: 'Tajikistan' },
			{ geonameId: 1220409 , name: 'Tanzania' },
			{ geonameId: 149590 , name: 'Thailand' },
			{ geonameId: 1605651 , name: 'Togo' },
			{ geonameId: 2363686 , name: 'Tokelau' },
			{ geonameId: 4031074 , name: 'Tonga' },
			{ geonameId: 4032283 , name: 'Trinidad and Tobago' },
			{ geonameId: 3573591 , name: 'Tunisia' },
			{ geonameId: 2464461 , name: 'Turkey' },
			{ geonameId: 298795 , name: 'Turkmenistan' },
			{ geonameId: 1218197 , name: 'Turks and Caicos Islands' },
			{ geonameId: 3576916 , name: 'Tuvalu' },
			{ geonameId: 2110297 , name: 'U.S. Virgin Islands' },
			{ geonameId: 4796775 , name: 'Uganda' },
			{ geonameId: 226074 , name: 'Ukraine' },
			{ geonameId: 690791 , name: 'United Arab Emirates' },
			{ geonameId: 290557 , name: 'United Kingdom' },
			{ geonameId: 2635167 , name: 'United States' },
			{ geonameId: 6252001 , name: 'United States Minor Outlying Islands' },
			{ geonameId: 5854968 , name: 'Uruguay' },
			{ geonameId: 3439705 , name: 'Uzbekistan' },
			{ geonameId: 1512440 , name: 'Vanuatu' },
			{ geonameId: 2134431 , name: 'Vatican' },
			{ geonameId: 3164670 , name: 'Venezuela' },
			{ geonameId: 3625428 , name: 'Vietnam' },
			{ geonameId: 1562822 , name: 'Wallis and Futuna' },
			{ geonameId: 4034749 , name: 'Western Sahara' },
			{ geonameId: 2461445 , name: 'Yemen' },
			{ geonameId: 69543 , name: 'Zambia' },
			{ geonameId: 895949 , name: 'Zimbabwe' }
		];
	}
}

