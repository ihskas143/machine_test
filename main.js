// google.load('visualization', '1', {
//     'packages': ['geochart']
// });
// google.setOnLoadCallback(drawVisualization);

// function drawVisualization() {
//     var data = google.visualization.arrayToDataTable([
//         ['State Code', 'State', 'Temperature'],
//         ['IN-UP', 'Uttar Pradesh', 33],
//         ['IN-MH', 'Maharashtra', 32],
//         ['IN-BR', 'Bihar', 31],
//         ['IN-WB', 'West Bengal', 32],
//         ['IN-MP', 'Madhya Pradesh', 30],
//         ['IN-TN', 'Tamil Nadu', 33],
//         ['IN-RJ', 'Rajasthan', 33],
//         ['IN-KA', 'Karnataka', 29],
//         ['IN-GJ', 'Gujarat', 34],
//         ['IN-AP', 'Andhra Pradesh', 32],
//         ['IN-OR', 'Orissa', 33],
//         ['IN-TG', 'Telangana', 33],
//         ['IN-KL', 'Kerala', 31],
//         ['IN-JH', 'Jharkhand', 29],
//         ['IN-AS', 'Assam', 28],
//         ['IN-PB', 'Punjab', 30],
//         ['IN-CT', 'Chhattisgarh', 33],
//         ['IN-HR', 'Haryana', 30],
//         ['IN-JK', 'Jammu and Kashmir', 20],
//         ['IN-UT', 'Uttarakhand', 28],
//         ['IN-HP', 'Himachal Pradesh', 17],
//         ['IN-TR', 'Tripura', 31],
//         ['IN-ML', 'Meghalaya', 21],
//         ['IN-MN', 'Manipur', 22],
//         ['IN-NL', 'Nagaland', 22],
//         ['IN-GA', 'Goa', 32],
//         ['IN-AR', 'Arunachal Pradesh', 33],
//         ['IN-MZ', 'Mizoram', 23],
//         ['IN-SK', 'Sikkim', 24],
//         ['IN-DL', 'Delhi', 31],
//         ['IN-PY', 'Puducherry', 33],
//         ['IN-CH', 'Chandigarh', 30],
//         ['IN-AN', 'Andaman and Nicobar Islands', 30],
//         ['IN-DN', 'Dadra and Nagar Haveli', 30],
//         ['IN-DD', 'Daman and Diu', 29],
//         ['IN-LD', 'Lakshadweep', 31]
//     ]);

//     var opts = {
//         region: 'IN',
//         domain: 'IN',
//         displayMode: 'regions',
//         colorAxis: {
//             colors: ['#e5ef88', '#d4b114', '#e85a03']
//         },
//         resolution: 'provinces',
//         /*backgroundColor: '#81d4fa',*/
//         /*datalessRegionColor: '#81d4fa',*/
//         defaultColor: '#f5f5f5',
//         width: 640,
//         height: 480
//     };
//     var geochart = new google.visualization.GeoChart(
//         document.getElementById('visualization'));
//     geochart.draw(data, opts);
// };


// Get elements
const menu = document.getElementById('menu');
const menuOverlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('closeBtn');

// Show the overlay when menu is clicked
menu.onclick = function () {
    menuOverlay.style.width = '40%'; // Fullscreen overlay
};

// Close the overlay when the close button is clicked
closeBtn.onclick = function () {
    menuOverlay.style.width = '0'; // Hide overlay
};

// Optionally, close the overlay when clicking anywhere outside the content
window.onclick = function (event) {
    if (event.target == menuOverlay) {
        menuOverlay.style.width = '0';
    }
};



document.addEventListener("DOMContentLoaded", function () {
    const tooltipCard = document.getElementById('tooltipCard');
    const tooltipContent = document.getElementById('tooltipContent');
    const locationPointers = document.querySelectorAll('.location-pointer');

    locationPointers.forEach(pointer => {
        // Show tooltip on mouseover
        pointer.addEventListener('mouseover', function (event) {
            const location = pointer.getAttribute('data-location');
            tooltipContent.innerHTML = createCustomTooltip(location);

            // Position the tooltip near the pointer
            tooltipCard.style.display = 'block';
            tooltipCard.style.top = (event.pageY - 50) + 'px'; // Adjust positioning
            tooltipCard.style.left = (event.pageX + 15) + 'px';
        });

        // Hide tooltip when the mouse leaves the pointer
        pointer.addEventListener('mouseout', function () {
            tooltipCard.style.display = 'none';
        });

        // Move tooltip with mouse
        pointer.addEventListener('mousemove', function (event) {
            tooltipCard.style.top = (event.pageY - 50) + 'px'; // Adjust positioning
            tooltipCard.style.left = (event.pageX + 15) + 'px';
        });
    });

    // Function to generate the tooltip content dynamically
    function createCustomTooltip(location) {
        return `
            <div>
                <h4>SHM Shipcare</h4>
                <p>Location: ${location}</p>
                <p class="view-map">View Map</p>
            </div>
        `;
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const tooltip = document.getElementById('tooltip');
//     const locationPointers = document.querySelectorAll('.location-pointer');

//     locationPointers.forEach(pointer => {
//         pointer.addEventListener('mouseover', function (event) {
//             const location = pointer.getAttribute('data-location');
//             tooltip.innerHTML = createCustomTooltip(location);
//             tooltip.style.display = 'block';
//             tooltip.style.top = (event.pageY + 15) + 'px'; // Offset to avoid covering pointer
//             tooltip.style.left = (event.pageX + 15) + 'px';
//         });

//         pointer.addEventListener('mousemove', function (event) {
//             // Update the tooltip position dynamically as the mouse moves
//             tooltip.style.top = (event.pageY + 15) + 'px';
//             tooltip.style.left = (event.pageX + 15) + 'px';
//         });

//         pointer.addEventListener('mouseout', function () {
//             tooltip.style.display = 'none'; // Hide tooltip when the mouse leaves the pointer
//         });
//     });
// });

// function createCustomTooltip(location) {
//     return `
//         <div style="padding:10px; border-radius:10px; background-color:#fff; border: 1px solid #ccc; width: 150px;">
//             <h4 style="margin: 0; font-size: 14px;">SHM Store</h4>
//             <p style="margin: 5px 0 0 0; font-size: 12px;">Location: ${location}</p>
//             <p style="color: red; margin: 5px 0 0 0; font-size: 12px;">View Map</p>
//         </div>`;
// }


// document.addEventListener("DOMContentLoaded", function () {
//     const tooltip = document.getElementById('tooltip');
//     const locationPointers = document.querySelectorAll('.location-pointer');

//     locationPointers.forEach(pointer => {
//         pointer.addEventListener('mouseover', function (event) {
//             const location = pointer.getAttribute('data-location');
//             tooltip.innerHTML = createCustomTooltip(location);
//             tooltip.style.display = 'block';
//             tooltip.style.top = (event.pageY + 15) + 'px';
//             tooltip.style.left = (event.pageX + 15) + 'px';
//         });

//         pointer.addEventListener('mousemove', function (event) {
//             // Update the tooltip position dynamically as the mouse moves
//             tooltip.style.top = (event.pageY + 15) + 'px';
//             tooltip.style.left = (event.pageX + 15) + 'px';
//         });

//         pointer.addEventListener('mouseout', function () {
//             tooltip.style.display = 'none';
//         });
//     });
// });

// function createCustomTooltip(location) {
//     return `
//         <div style="padding:10px; border-radius:10px; background-color:#fff; border: 1px solid #ccc; width: 150px;">
//             <h4 style="margin: 0; font-size: 14px;">SHM Store</h4>
//             <p style="margin: 5px 0 0 0; font-size: 12px;">Location: ${location}</p>
//             <p style="color: red; margin: 5px 0 0 0; font-size: 12px;">View Map</p>
//         </div>`;
// }
