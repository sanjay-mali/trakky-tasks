Task 1 :
Build a Service Table with Pagination, Search, and Loading States
Project Overview
Create a responsive table in React that displays service data from a REST API. The table should include pagination, full-data search, loading states, and an elegant design with CSS.

API Resources
Base API for data: http://20.193.149.47:2242/salons/service/
Pagination: http://20.193.149.47:2242/salons/service/?page={pageNumber}
Note: The current page's API response includes URLs for next and previous pages.
Requirements
Data Display: Fetch and display data from the API in a table format.

Show only the table header initially, while waiting for data.
Pagination: Display 100 items per page.

Use the next and previous URLs in the API response to handle pagination.
Include "Next" and "Previous" buttons for page navigation.
Search: Implement a search feature that filters services by name across all data.

implement in page search for services
Loading and Empty States:

Loading: Display a loading indicator in place of table rows while data is fetching.
No Data: Show a "No Data Available" message if there are no results after searching.
Table Header: Ensure the table header is visible in all states (loading, data loaded, or no data).
Design:

Style the table attractively with CSS, using professional and visually balanced colors.
Add hover effects to rows for improved UX.
Ensure the table is responsive for various screen sizes.
Deliverables
A fully functional React component that:
Integrates with the provided REST APIs for data, pagination, and search.
Implements loading and empty states, with a persistent table header.
Is styled with attractive and professional CSS, including color combinations and hover effects.