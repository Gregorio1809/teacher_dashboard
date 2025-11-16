// Sample data for the dashboard
const dashboardData = {
    totalStudents: 32,
    activeAssignments: 5,
    submissionRate: 87,
    avgGrade: 85.4,
    recentSubmissions: [
        { name: 'Sarah Johnson', assignment: 'Math Homework #5', time: '2 hours ago' },
        { name: 'Michael Chen', assignment: 'Science Project', time: '4 hours ago' },
        { name: 'Emma Williams', assignment: 'English Essay', time: '5 hours ago' },
        { name: 'David Martinez', assignment: 'Math Homework #5', time: '6 hours ago' },
        { name: 'Olivia Brown', assignment: 'History Report', time: '8 hours ago' }
    ],
    upcomingDeadlines: [
        { title: 'Math Quiz #3', date: 'Tomorrow, 2:00 PM' },
        { title: 'Science Lab Report', date: 'Nov 12, 11:59 PM' },
        { title: 'English Reading Response', date: 'Nov 14, 5:00 PM' },
        { title: 'History Group Project', date: 'Nov 16, 3:00 PM' }
    ],
    students: [
        { name: 'Sarah Johnson', grade: 'A', attendance: 95 },
        { name: 'Michael Chen', grade: 'A', attendance: 98 },
        { name: 'Emma Williams', grade: 'B', attendance: 92 },
        { name: 'David Martinez', grade: 'B', attendance: 88 },
        { name: 'Olivia Brown', grade: 'A', attendance: 100 }
    ]
};

// Chart instances
let performanceChart, completionChart, trendChart, engagementChart;

// Update statistics
// FIX THIS JS FUNCTION
function updateStats() {
    document.getElementById('totalStudents').textContent = dashboardData.totalStudents;
    document.getElementById('activeAssignments').textContent = dashboardData.activeAssignments;
    document.getElementById('avgGrade').textContent = dashboardData.avgGrade;
}

// Populate recent submissions
// FIX THIS JS FUNCTION
function populateRecentSubmissions() {
    const container = document.getElementById('recentSubmissions');
    container.innerHTML = '';
    
    dashboardData.recentSubmissions.forEach(submission => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <div class="name">${submission.name}</div>
        `;
        container.appendChild(item);
    });
}

// Populate upcoming deadlines
function populateUpcomingDeadlines() {
    const container = document.getElementById('upcomingDeadlines');
    container.innerHTML = '';
    
    dashboardData.upcomingDeadlines.forEach(deadline => {
        const item = document.createElement('div');
        item.className = 'deadline-item';
        item.innerHTML = `
            <div class="title">${deadline.title}</div>
            <div class="date">${deadline.date}</div>
        `;
        container.appendChild(item);
    });
}

// Chart.js Configuration
const chartColors = {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#10b981',
    warning: '#fbbf24',
    danger: '#ef4444',
    info: '#3b82f6',
    gray: '#6b7280'
};

// Initialize Performance Chart
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'F'],
            datasets: [{
                label: 'Number of Students',
                data: [12, 15, 4, 1, 0],
                // Fix this JS COLOR
                backgroundColor: [
                    chartColors.success,
                    chartColors.gray
                ],
                borderWidth: 0,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + ' students';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Initialize Completion Chart
function initCompletionChart() {
    const ctx = document.getElementById('completionChart').getContext('2d');
    
    // Fix this Chart
    completionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Completed', 'Pending', 'Late'],
            datasets: [{
                data: [28, 3, 1],
                // Fix this JS COLOR
                backgroundColor: [
                    chartColors.danger
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: { size: 12 },
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            // Fix this RETURN
                            return context.label;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000
            }
        }
    });
}

// Initialize Trend Chart
function initTrendChart() {
    const ctx = document.getElementById('trendChart').getContext('2d');
    
    // Fix this Chart
    trendChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Average Grade',
                data: [78, 82, 85, 84, 87, 85.4],
                borderColor: chartColors.primary,
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 8,
                pointBackgroundColor: chartColors.primary
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'Average: ' + context.parsed.y.toFixed(1);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            // Fix this JS animation
            animation: {
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Initialize Engagement Chart
function initEngagementChart() {
    const ctx = document.getElementById('engagementChart').getContext('2d');
    
    // fix this Chart
    engagementChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Attendance', 'Participation', 'Homework', 'Quizzes', 'Projects'],
            datasets: [{
                label: 'Class Average',
                data: [92, 85, 88, 87, 90],
                borderColor: chartColors.primary,
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                // fix this JS datasets attributes
                borderWidth: 2,
                pointHoverBorderColor: chartColors.primary
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed.r + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            animation: {
                duration: 1000
            }
        }
    });
}

// Initialize all charts
// FIX THIS JS FUNCTION
function initCharts() {
    initPerformanceChart();
    initTrendChart();
    initEngagementChart();
}

// Update performance chart based on filter
// FIX THIS JS Function
function updatePerformanceChart(filterType) {
    if (filterType === 'subject') {
        performanceChart.data.labels = ['Math', 'Science', 'English', 'History'];
        performanceChart.data.datasets[0].data = [88, 85, 90, 82];
    } else {
        performanceChart.data.datasets[0].label = 'Number of Students';
    }
    performanceChart.update();
}

// Update completion chart based on filter
function updateCompletionChart(filterType) {
    if (filterType === 'week') {
        completionChart.data.datasets[0].data = [15, 2, 0];
    } else if (filterType === 'month') {
        completionChart.data.datasets[0].data = [120, 8, 3];
    } else {
        completionChart.data.datasets[0].data = [28, 3, 1];
    }
    completionChart.update();
}

// Modal functions
// FIX THIS JS FUNCTION
function showModal(title, body) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = body;
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

// Interactive stat card functions
// FIX THIS JS FUNCTION
function showStudentList() {
    let studentListHTML = '<ul class="modal-list">';
    dashboardData.students.forEach(student => {
        studentListHTML += `
            <li>
                <span><strong>${student.name}</strong> - Grade: ${student.grade}</span>
            </li>
        `;
    });
    studentListHTML += '</ul>';
    showModal('Student List', studentListHTML);
}

function showAssignmentList() {
    const assignments = [
        { name: 'Math Quiz #3', due: 'Tomorrow', status: 'Active' },
        { name: 'Science Lab Report', due: 'Nov 12', status: 'Active' },
        { name: 'English Essay', due: 'Nov 14', status: 'Active' },
        { name: 'History Project', due: 'Nov 16', status: 'Active' },
        { name: 'Math Homework #5', due: 'Completed', status: 'Closed' }
    ];
    
    let listHTML = '<ul class="modal-list">';
    assignments.forEach(assignment => {
        listHTML += `
            <li>
                <span><strong>${assignment.name}</strong></span>
                <span style="color: ${assignment.status === 'Active' ? '#10b981' : '#6b7280'}">${assignment.due}</span>
            </li>
        `;
    });
    listHTML += '</ul>';
    showModal('Active Assignments', listHTML);
}

function showSubmissionDetails() {
    const details = `
        <p><strong>Total Submissions:</strong> 28 / 32</p>
        <p><strong>Submission Rate:</strong> 87%</p>
        <p><strong>On-time Submissions:</strong> 28</p>
        <p><strong>Late Submissions:</strong> 1</p>
        <p><strong>Missing:</strong> 3</p>
        <div style="margin-top: 1rem; padding: 1rem; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #10b981;">
            <strong>Great job!</strong> Your class has a high submission rate.
        </div>
    `;
    showModal('Submission Details', details);
}

// FIX THIS JS FUNCTION
function showGradeBreakdown() {
    const breakdown = `
        <p><strong>Class Average:</strong> 85.4</p>
        <p><strong>Highest Grade:</strong> 98</p>
        <p><strong>Median Grade:</strong> 86</p>
        <hr style="margin: 1rem 0; border: none; border-top: 1px solid #e5e7eb;">
        <p><strong>Grade Distribution:</strong></p>
        <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem 0;">📗 A (90-100): 12 students (37.5%)</li>
            <li style="padding: 0.5rem 0;">📘 B (80-89): 15 students (46.9%)</li>
            <li style="padding: 0.5rem 0;">📙 C (70-79): 4 students (12.5%)</li>
            <li style="padding: 0.5rem 0;">📕 D (60-69): 1 student (3.1%)</li>
        </ul>
    `;
    showModal('Grade Breakdown', breakdown);
}

// Quick action functions
function showAddStudentModal() {
    const form = `
        <p>Add a new student to your class.</p>
        <div style="margin-top: 1rem;">
            <input type="text" placeholder="Student Name" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px;">
            <input type="email" placeholder="Email Address" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px;">
            <button onclick="alert('Student added successfully!'); closeModal();" style="width: 100%; padding: 0.75rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">Add Student</button>
        </div>
    `;
    showModal('Add New Student', form);
}

function showCreateAssignmentModal() {
    const form = `
        <p>Create a new assignment for your class.</p>
        <div style="margin-top: 1rem;">
            <input type="text" placeholder="Assignment Title" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px;">
            <input type="date" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px;">
            <textarea placeholder="Description" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px; min-height: 100px;"></textarea>
            <button onclick="alert('Assignment created successfully!'); closeModal();" style="width: 100%; padding: 0.75rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">Create Assignment</button>
        </div>
    `;
    showModal('Create New Assignment', form);
}

function showGradeModal() {
    const recentSubmissions = `
        <p>Recent submissions ready for grading:</p>
        <ul class="modal-list" style="margin-top: 1rem;">
            <li>
                <span><strong>Sarah Johnson</strong><br><small>Math Homework #5</small></span>
                <button onclick="alert('Grading Sarah\'s assignment')" style="padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;">Grade</button>
            </li>
            <li>
                <span><strong>Michael Chen</strong><br><small>Science Project</small></span>
                <button onclick="alert('Grading Michael\'s assignment')" style="padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;">Grade</button>
            </li>
            <li>
                <span><strong>Emma Williams</strong><br><small>English Essay</small></span>
                <button onclick="alert('Grading Emma\'s assignment')" style="padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;">Grade</button>
            </li>
        </ul>
    `;
    showModal('Grade Submissions', recentSubmissions);
}

function exportData() {
    const message = `
        <p>Choose the data you want to export:</p>
        <div style="margin-top: 1rem;">
            <button onclick="alert('Exporting student data...'); closeModal();" style="width: 100%; padding: 0.75rem; margin-bottom: 0.5rem; background: white; border: 2px solid #667eea; color: #667eea; border-radius: 8px; cursor: pointer; font-size: 1rem;">📊 Student Grades</button>
            <button onclick="alert('Exporting attendance...'); closeModal();" style="width: 100%; padding: 0.75rem; margin-bottom: 0.5rem; background: white; border: 2px solid #667eea; color: #667eea; border-radius: 8px; cursor: pointer; font-size: 1rem;">📅 Attendance Records</button>
            <button onclick="alert('Exporting assignments...'); closeModal();" style="width: 100%; padding: 0.75rem; margin-bottom: 0.5rem; background: white; border: 2px solid #667eea; color: #667eea; border-radius: 8px; cursor: pointer; font-size: 1rem;">📝 Assignment Data</button>
            <button onclick="alert('Exporting all data...'); closeModal();" style="width: 100%; padding: 0.75rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">📦 Export All Data</button>
        </div>
    `;
    showModal('Export Data', message);
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize dashboard
// FIX THIS JS FUNCTION
function initDashboard() {
    updateStats();
    populateUpcomingDeadlines();
    initCharts();
    
    // Add chart filter event listeners
    document.getElementById('performanceFilter').addEventListener('change', (e) => {
        updatePerformanceChart(e.target.value);
    });
    
    document.getElementById('completionFilter').addEventListener('change', (e) => {
        updateCompletionChart(e.target.value);
    });
}

// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        sidebar.classList.toggle('mobile-open');
    } else {
        sidebar.classList.toggle('collapsed');
    }
}

// Handle navigation item clicks
function handleNavClick(event) {
    // Remove active class from all items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    const navItem = event.target.closest('.nav-item');
    if (navItem) {
        navItem.classList.add('active');
        
        // Update page title based on nav item
        const navText = navItem.querySelector('.nav-text');
        if (navText) {
            document.querySelector('.page-title').textContent = navText.textContent;
        }
        
        // Close sidebar on mobile after clicking
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('mobile-open');
        }
    }
}

// Add click listeners to nav items
function initNavigation() {
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile && 
        sidebar.classList.contains('mobile-open') && 
        !sidebar.contains(event.target) && 
        !toggle.contains(event.target)) {
        sidebar.classList.remove('mobile-open');
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    initNavigation();
});
