// Problem 02 : প্রোডাক্ট ট্যাগিং
// একটি অনলাইন স্টোরের জন্য আপনাকে একটি প্রোগ্রাম লিখতে হবে (productDescription) যেটা (স্ট্রিং) ইনপুট নেবে যা প্রোডাক্ট details দেখে স্বয়ংক্রিয়ভাবে কিছু ট্যাগ (Tag) অ্যাড করবে। যেমনঃ

// details

// যদি details এ "cotton" শব্দটি থাকে , তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Material: Cotton".

// যদি details এ "sale" শব্দটি থাকে , তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Category: Sale Item".

// যদি details এ "new arrival"  শব্দ থাকে, তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Status: New Arrival".

// যদি details এ "limited edition"  শব্দগুচ্ছ থাকে, তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Availability: Limited".

// যদি কোনো শর্তই পূরণ না হয়, তাহলে একটি ডিফল্ট ট্যাগ "Tag: General"

// ADVANCED: কেস ইনসেনসিটিভ Handle করো।

let productDescription = "cotton sale new arrival limited edition";

let allData = "";

for (let i = 0; i < productDescription.length; i++) {
  allData += productDescription[i];
  if (allData.includes("cotton")) {
    console.log("Material: Cotton");
    break;
  } else if (allData.includes("sale")) {
    console.log("Category: Sale Item");
    break;
  } else if (allData.includes("new arrival")) {
    console.log("Status: New Arrival");
    break;
  } else if (allData.includes("limited edition")) {
    console.log("Availability: Limited");
    break;
  } else {
    console.log("Tag: General");
    break;
  }
}

let details = productDescription.includes("sale");

console.log(details, "Material: Cotton");
