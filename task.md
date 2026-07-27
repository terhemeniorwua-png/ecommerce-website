This task is designed to test your understanding of REST APIs, JavaScript, DOM manipulation, state management, and UI development. It is not just about fetching data—it tests how you handle CRUD operations and application state.

Let's break it down.

Overview

You need to build two separate pages:

Customer/Home Page
Only uses GET requests.
Displays products.
Allows searching, filtering, pagination, and viewing product details.
Admin Dashboard
Uses POST, PUT, PATCH, and DELETE requests.
Simulates managing products.
Since DummyJSON doesn't permanently save changes, you'll maintain your own local copy ("shadow state").
Part 1 — Home Page (GET Requests Only)

These are the endpoints you'll use.

1. Display all products
GET
https://dummyjson.com/products

Display products in a grid.

Each card might show:

Image
Name
Price
Rating
Category
Brand

Example

-----------------------------------
|      Product Image              |
| iPhone 15                       |
| Apple                           |
| ⭐ 4.9                           |
| $999                            |
-----------------------------------
2. Pagination

DummyJSON supports

limit
skip

Example

https://dummyjson.com/products?limit=12&skip=0

First page

Products 1–12

Second page

https://dummyjson.com/products?limit=12&skip=12

Third page

skip=24

So you'll build buttons

Previous

1

2

3

Next
3. Categories
GET
/products/categories

Returns something like

Beauty

Furniture

Laptops

Groceries

Phones

Display them as

All

Beauty

Furniture

Laptops

Phones
4. Filter by category

When user clicks

Furniture

Call

GET
/products/category/furniture

Only furniture products appear.

5. Search

Endpoint

GET
/products/search?q=phone

As the user types

iph

you call

/products/search?q=iph

and update the grid.

6. Product Detail

When user clicks a product

Call

GET
/ products/15

Show

large image
description
stock
reviews
price
rating
dimensions

This can be

Modal
Separate page
Side drawer
Part 2 — Admin Dashboard

This page is completely different.

The customer cannot access this page.

Add Product

Endpoint

POST
/products/add

Example

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        title:"Gaming Chair",
        price:250
    })
})

DummyJSON returns

{
 id:194,
 title:"Gaming Chair",
 price:250
}

But...

It DOES NOT permanently save it.

Meaning

Refresh page

↓

Product disappears.

Shadow State

This is probably the most important concept in the assignment.

Because DummyJSON is fake,

YOU create your own product list.

Example

let products = [];

Initially

GET /products

Store inside

products = response.products;

When adding

Instead of waiting for DummyJSON

You immediately do

products.unshift(newProduct);

Now UI updates.

This is called

Local Shadow State

It mirrors what the server would contain.

PUT (Full Edit)

Endpoint

PUT
/products/15

Replace every editable property.

Example

Old

Title

Price

Brand

Description

↓

New

Gaming Laptop

$1600

Dell

RTX graphics

Update your shadow state.

PATCH (Quick Edit)

PATCH changes only a few fields.

Example

Price only
PATCH
/products/15

Body

{
 price:900
}

Don't replace everything.

Only

price

changes.

DELETE
DELETE
/products/15

DummyJSON returns success.

Remove it from

products
Optimistic UI

Suppose user clicks

Delete

Instead of waiting...

Immediately remove product from screen.

Before

A
B
C
D

↓

Immediately

A
B
D

Then send request.

If request succeeds

Nothing happens.

If request fails

Restore

A
B
C
D

This makes apps feel very fast.

Rollback on Failure

Imagine

Delete Product

You remove it immediately.

Then

DELETE failed

You must put it back.

Same idea for

POST
PUT
PATCH

Save the previous state first.

Example

const previous = [...products];

// optimistic update

try {

    await fetch(...);

} catch {

    products = previous;

}
Activity Log

Every admin action should be recorded.

Example

10:30 AM

Added

Gaming Chair
10:35 AM

Updated

iPhone 15
10:42 AM

Deleted

MacBook Pro

Store something like

activity.push({
    action:"DELETE",
    product:"MacBook",
    time:new Date()
});

Display it on the dashboard.

Suggested Project Structure
project/
│
├── index.html          // Home page
├── admin.html          // Admin dashboard
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js          // All fetch requests
│   ├── home.js         // Home page logic
│   ├── admin.js        // Admin page logic
│   ├── state.js        // Shadow state
│   ├── pagination.js
│   ├── search.js
│   ├── filters.js
│   └── activity.js
│
└── assets/
Skills This Task Tests
Fetch API (GET, POST, PUT, PATCH, DELETE)
Async/await
JSON handling
DOM manipulation
Event listeners
Search functionality
Category filtering
Pagination
State management (shadow state)
Optimistic UI updates
Rollback/error handling
CRUD operations
Reusable JavaScript modules
Responsive UI design
A Good UI Layout
HOME PAGE
-------------------------------------------------
Logo

Search Bar

Categories

-------------------------------------------------
| Product | Product | Product | Product |
| Product | Product | Product | Product |
-------------------------------------------------

Previous   1   2   3   Next
ADMIN DASHBOARD
-------------------------------------------------
Sidebar

Dashboard

Products

Activity Log

-------------------------------------------------

+ Add Product

-------------------------------------------------
| Product Table                          |
| Edit | Patch | Delete                  |
-------------------------------------------------

Activity Log
-------------------------
10:20 Added Chair
10:25 Updated Phone
10:40 Deleted Laptop

If you're building this from scratch, I recommend tackling it in this order:

Build the product grid with GET /products.
Add pagination (limit and skip).
Add category filtering.
Add search.
Add the product detail modal/page.
Create the admin dashboard and initialize a local shadow state from the fetched products.
Implement Add (POST) with optimistic updates and rollback.
Implement Full Edit (PUT).
Implement Quick Edit (PATCH).
Implement Delete (DELETE).
Add the activity log and polish the UI.

This progression keeps the project manageable and mirrors how a real-world application would typically be built.

an image with a transparent background that i can use for the homepage of this website
