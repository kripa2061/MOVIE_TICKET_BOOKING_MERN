import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, Users2Icon, Loader, StarIcon } from 'lucide-react';
import BlurCircle from '../../Component/BlurCircle';
import { dateFormat } from '../../lib/DateFormat';
import { toast } from 'react-hot-toast';
import './Dashboard.css';
import isoTimeFormat from '../../lib/ISOTIMEFORMAT';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    totalUser: 0,
    activeShows: []
  });

  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState({ activeShows: [] });

  const url = 'http://localhost:8000'; // your backend URL

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(`${url}/api/movie/movieList`);
      if (response.data.success) {
        toast.success('Movies fetched successfully');
        // Wrap the movie array in an object with activeShows key
        setShows({ activeShows: response.data.data });
      } else {
        toast.error('Failed to fetch movies');
      }
    } catch (err) {
      toast.error(err.message || 'Server error');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const stats = [
    { title: "Total Booking", value: dashboardData.totalBookings, icon: ChartLineIcon },
    { title: "Total Revenue", value: dashboardData.totalRevenue, icon: CircleDollarSignIcon },
    { title: "Active Shows", value: shows.activeShows.length, icon: PlayCircleIcon },
    { title: "Total User", value: dashboardData.totalUser, icon: Users2Icon }
  ];

  return (
    <>
      {loading ? (
        <div className="adm-loader">
          <Loader />
        </div>
      ) : (
        <div className="adm-dashboard">
          <h2 className="adm-dashboard-title">Admin Dashboard</h2>

          <BlurCircle top="100px" left="100px" size="400px" blur="190px" />
          <BlurCircle top="50%" left="50%" size="600px" blur="500px" />

          <div className="adm-stats-container">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="adm-stat-box">
                  <div className="adm-stat-text">
                    <p className="adm-stat-value">{stat.value}</p>
                    <p className="adm-stat-title">{stat.title}</p>
                  </div>
                  <StatIcon className="adm-stat-icon" />
                </div>
              );
            })}
          </div>

          <p className="adm-section-title">Active Shows</p>
          <div className="adm-active-shows">
            {shows.activeShows.length === 0 ? (
              <p>No active shows</p>
            ) : (
              shows.activeShows.map((item) => (
                <div key={item._id} className="adm-show-box">
                  <img src={`${url}/Uploads/${item.image}`}  className="adm-show-image"/>
                  <p className="adm-show-title">{item.name}</p>
                  <div className="adm-show-price-rating">
                    <p className="adm-show-price">Rs. {item.price}</p>
                    {/* <div className="adm-show-rating">
                      <StarIcon className="adm-show-star-icon"/>
                      {show.vote_average.toFixed(1)}
                    </div> */}
                  </div>
                 {item.datetime && item.datetime.length > 0 ? (
                  item.datetime.map((d, idx) => {
                    if (!d.date) return null; // skip invalid entries
                    const datePart = d.date.split("T")[0];      // "YYYY-MM-DD"
                    const isoString = `${datePart}T${d.time || "00:00"}:00`; // fallback time
                    return (
                      <span key={d._id}>
                        {isoTimeFormat(isoString)}
                        {idx < item.datetime.length - 1 && ", "}
                      </span>
                    );

                  })

                ) : (
                  <span>No showtimes</span>
                )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
