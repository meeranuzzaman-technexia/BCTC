// Source: https://bonecare.com.pk/our-facilities/ (accessed 17 November 2026).
// The 20 original entries are retained. Only spelling/capitalisation is tidied.
// The source's unusual "95 KV" solar rating is deliberately NOT reinterpreted.
export const FACILITY_CATEGORIES = [
  { id: "all", label: "All facilities" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "surgery", label: "Surgery & critical care" },
  { id: "patient", label: "Patient care" },
  { id: "support", label: "Hospital support" },
];

export const FACILITY_ITEMS = [
  { number: "01", title: "CT Scan Unit", category: "diagnostics", icon: "ScanLine" },
  { number: "02", title: "X-Ray Unit", category: "diagnostics", icon: "ScanLine" },
  { number: "03", title: "Ultrasound Unit", category: "diagnostics", icon: "Activity" },
  { number: "04", title: "General OPD", category: "patient", icon: "Stethoscope" },
  { number: "05", title: "TUC Shop", category: "support", icon: "ShoppingBag" },
  { number: "06", title: "Endoscopy", category: "surgery", icon: "Stethoscope" },
  { number: "07", title: "Laparoscopy", category: "surgery", icon: "Stethoscope" },
  { number: "08", title: "C-Arm", category: "surgery", icon: "ScanLine" },
  { number: "09", title: "Two Pharmacies", category: "support", icon: "Pill" },
  { number: "10", title: "In-House Laboratory", category: "diagnostics", icon: "FlaskConical" },
  { number: "11", title: "Special Air Duct System", category: "support", icon: "Wind" },
  { number: "12", title: "Two Standby Generators", category: "support", icon: "Zap" },
  { number: "13", title: "Deluxe & VIP Private Rooms", category: "patient", icon: "BedDouble" },
  { number: "14", title: "95 KV Solar System", category: "support", icon: "Sun" },
  { number: "15", title: "Three Boring Wells for Fresh Water", category: "support", icon: "Droplets" },
  { number: "16", title: "7-Bedded ICU & HDU", detail: "Fully equipped", category: "surgery", icon: "HeartPulse" },
  { number: "17", title: "10 Operation Theatres", detail: "Fully equipped", category: "surgery", icon: "Cross" },
  { number: "18", title: "Hospital-Wide CCTV Coverage", detail: "Security cameras throughout the hospital", category: "support", icon: "ShieldCheck" },
  { number: "19", title: "102-Bedded Wards", detail: "Medicine, gastrology & surgical wards", category: "patient", icon: "BedDouble" },
  { number: "20", title: "Special Knee Replacement Surgery", detail: "Every Thursday", category: "surgery", icon: "Activity" },
];

export const FACILITY_HIGHLIGHTS = [
  { number: "10", label: "Operation theatres", detail: "Fully equipped surgical facilities" },
  { number: "07", label: "ICU & HDU beds", detail: "Fully equipped critical care" },
  { number: "102", label: "Ward beds", detail: "Medicine, gastrology & surgical wards" },
];
