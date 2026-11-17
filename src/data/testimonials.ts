export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  stayType: string;
  rating: number;
}

export const GUEST_TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    quote:
      "Best hotel in Manish Nagar! Extremely convenient and nearest to Nagpur Airport. The restaurant serves tasty food and all the staff members are supportive and helpful throughout the stay.",
    author: "Prashant Deshmukh",
    location: "Google Verified Review",
    stayType: "Airport Transit & Business",
    rating: 5,
  },
  {
    id: "review-2",
    quote:
      "Food quality, staff behavior, and management are very good. The banquet hall was well-arranged for our family function with great catering and attentive hospitality. Highly recommended in South Nagpur.",
    author: "Rajesh Kulkarni",
    location: "Google Review",
    stayType: "Banquet & Family Event",
    rating: 5,
  },
  {
    id: "review-3",
    quote:
      "This place provides prompt service and has great ambiance. Located in Jai Durga Society in Manish Nagar, peaceful locality yet markets are within walking distance.",
    author: "Snehal Thakre",
    location: "Google Review",
    stayType: "Holiday & Leisure Stay",
    rating: 5,
  },
  {
    id: "review-4",
    quote:
      "Very convenient transit location near Wardha Road and airport. The AC rooms are comfortable with reliable Wi-Fi, elevator access, and quick room service.",
    author: "Amitabh Banerjee",
    location: "Business Travel Review",
    stayType: "Corporate Business",
    rating: 5,
  },
  {
    id: "review-5",
    quote:
      "Attended an engagement ceremony in their banquet space. Spacious hall, good sound arrangement, tasty multicuisine dinner, and courteous team managing the event smoothly.",
    author: "Pooja Wankhede",
    location: "Google Review",
    stayType: "Banquet Celebration",
    rating: 5,
  },
  {
    id: "review-6",
    quote:
      "Great value for money 3-star property in Manish Nagar. Staff accommodated our early morning airport drop request smoothly. Polite reception and comfortable beds.",
    author: "Nitin Sharma",
    location: "Verified Guest Review",
    stayType: "Transit Stay",
    rating: 5,
  },
];
