export type Category =
  | "Leisure"
  | "Services"
  | "Shopping"
  | "Health"
  | "Education"
  | "FoodDrink";

export interface PinDatum {
  id: string;
  name: string;
  category: Category;
  subcategory: string;
  lng: number;
  lat: number;
}

// A named cluster of places inside a category (e.g. "Restaurants" under Food & Drink).
export interface SubGroup {
  name: string;
  places: PinDatum[];
}

// category → color, matching the 6 original pins exactly
export const CATEGORY_COLOR: Record<Category, string> = {
  Leisure: "#1d8842",
  Services: "#5f66ec",
  Shopping: "#3c99e0",
  Health: "#d72a89",
  Education: "#747c00",
  FoodDrink: "#d57427",
};

// Fictional places around Quay Quarter Tower, Sydney (151.2110, -33.8627).
// Intentionally seeded with tight clusters (→ compact/vertical badges) and a few
// far-flung outliers (→ stay horizontal at the default zoom).
export const PINS: PinDatum[] = [
  // Cluster A — Bridge / Young St (tight)
  { id: "a1", name: "Loftus Lane Eatery", category: "FoodDrink", subcategory: "Restaurants", lng: 151.2118, lat: -33.8619 },
  { id: "a2", name: "Young St Bistro", category: "FoodDrink", subcategory: "Restaurants", lng: 151.2115, lat: -33.8621 },
  { id: "a3", name: "Quay Quarter Lanes", category: "Shopping", subcategory: "Fashion & Retail", lng: 151.2113, lat: -33.8618 },
  { id: "a4", name: "Bridge St Advisory", category: "Services", subcategory: "Business", lng: 151.2116, lat: -33.8623 },

  // Cluster B — Circular Quay (tight)
  { id: "b1", name: "Circular Quay Greens", category: "Leisure", subcategory: "Parks & Greens", lng: 151.2108, lat: -33.8608 },
  { id: "b2", name: "Customs House Books", category: "Shopping", subcategory: "Books & Gifts", lng: 151.211, lat: -33.8606 },
  { id: "b3", name: "Ferry Wharf Café", category: "FoodDrink", subcategory: "Coffee Shops", lng: 151.2113, lat: -33.8605 },

  // Cluster C — Macquarie / Phillip St (tight)
  { id: "c1", name: "Macquarie Learning Hub", category: "Education", subcategory: "Learning", lng: 151.2131, lat: -33.8649 },
  { id: "c2", name: "Phillip St Wellness", category: "Health", subcategory: "Clinics & Wellness", lng: 151.2135, lat: -33.8645 },
  { id: "c3", name: "Botanic Reading Room", category: "Education", subcategory: "Learning", lng: 151.2138, lat: -33.8651 },

  // Mid-field singles
  { id: "m1", name: "O'Connell St Pharmacy", category: "Health", subcategory: "Pharmacies", lng: 151.2098, lat: -33.8634 },
  { id: "m2", name: "Hunter St Greens", category: "Leisure", subcategory: "Parks & Greens", lng: 151.2102, lat: -33.864 },
  { id: "m3", name: "Bligh St Outfitters", category: "Shopping", subcategory: "Fashion & Retail", lng: 151.2126, lat: -33.8636 },

  // Outliers — far enough to stay horizontal at default zoom
  { id: "o1", name: "Harbourside Clinic", category: "Health", subcategory: "Clinics & Wellness", lng: 151.2085, lat: -33.8648 },
  { id: "o2", name: "The Rocks Gallery", category: "Leisure", subcategory: "Culture & Lookouts", lng: 151.2082, lat: -33.8596 },
  { id: "o3", name: "Barangaroo Books", category: "Shopping", subcategory: "Books & Gifts", lng: 151.2015, lat: -33.862 },
  { id: "o4", name: "Opera Point Lookout", category: "Leisure", subcategory: "Culture & Lookouts", lng: 151.2155, lat: -33.8567 },
  { id: "o5", name: "Hyde Park Kiosk", category: "FoodDrink", subcategory: "Coffee Shops", lng: 151.2106, lat: -33.8704 },
];

// Group the pins into category → ordered subgroups (by first appearance), so the
// sidebar can render expandable categories with named sub-clusters of cards.
export const SUBGROUPS_BY_CATEGORY: Record<Category, SubGroup[]> = (() => {
  const out = {} as Record<Category, SubGroup[]>;
  for (const pin of PINS) {
    const groups = (out[pin.category] ??= []);
    let group = groups.find((g) => g.name === pin.subcategory);
    if (!group) {
      group = { name: pin.subcategory, places: [] };
      groups.push(group);
    }
    group.places.push(pin);
  }
  return out;
})();
