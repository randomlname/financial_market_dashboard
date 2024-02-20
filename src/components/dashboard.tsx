"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react';
import { FiActivity, FiMoon, FiSearch, FiRefreshCw } from 'react-icons/fi';

export function Dashboard() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemPreference);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 px-4 border-b gap-4 lg:gap-8 dark:border-gray-100">
        <Link className="flex items-center gap-2 font-semibold text-lg lg:text-xl" href="#">
          <FiActivity className="h-6 w-6" />
          <span className="">Market Analysis</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 lg:gap-6">
          <Link className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-50" href="#">
            Home
          </Link>
          <Link className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-50" href="#">
            Stocks
          </Link>
          <Link className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-50" href="#">
            Cryptocurrency
          </Link>
          <Link className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-50" href="#">
            Economic Calendar
          </Link>
          <Link className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-50" href="#">
            News & Insights
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800" id="theme" size="icon" variant="ghost" onClick={toggleTheme}>
              <FiMoon className="w-4 h-4" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </PopoverTrigger>
          </Popover>
        </nav>
      </header>
      <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8 main">
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="grid gap-1.5">
              <CardTitle>Market Overview</CardTitle>
              <CardDescription>Summary of the overall market performance.</CardDescription>
            </div>
            <Button className="ml-auto w-full md:w-auto" size="sm" variant="outline">
              View Details
            </Button>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="grid grid-cols-2 items-center">
              <div className="font-semibold">S&P 500</div>
              <div className="text-right">+0.75%</div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="font-semibold">NASDAQ</div>
              <div className="text-right">-0.25%</div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="font-semibold">DOW JONES</div>
              <div className="text-right">+1.20%</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="grid gap-1.5">
              <CardTitle>Stock Market Analysis</CardTitle>
              <CardDescription>Individual stocks and their performance.</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Input className="w-full max-w-xs" placeholder="Search stocks..." type="search" />
              <Button size="icon" variant="outline">
                <FiSearch className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">AAPL</div>
              <div className="text-right">142.56</div>
              <div className="text-right">+0.75%</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">GOOGL</div>
              <div className="text-right">2756.89</div>
              <div className="text-right">-0.25%</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">TSLA</div>
              <div className="text-right">800.00</div>
              <div className="text-right">+1.20%</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="grid gap-1.5">
              <CardTitle>Cryptocurrency Market Analysis</CardTitle>
              <CardDescription>Real-time prices of major cryptocurrencies.</CardDescription>
            </div>
            <Button className="ml-auto rounded-full" size="icon" variant="outline">
              <FiRefreshCw className="w-4 h-4" />
              <span className="sr-only">Refresh</span>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">BTC</div>
              <div className="text-right">$34256.00</div>
              <div className="text-right">+0.75%</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">ETH</div>
              <div className="text-right">$2756.89</div>
              <div className="text-right">-0.25%</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">DOGE</div>
              <div className="text-right">$0.00</div>
              <div className="text-right">+1.20%</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="grid gap-1.5">
              <CardTitle>Economic Calendar</CardTitle>
              <CardDescription>Upcoming economic events and their impact.</CardDescription>
            </div>
            <Button className="ml-auto rounded-full" size="icon" variant="outline">
              <FiRefreshCw className="w-4 h-4" />
              <span className="sr-only">Refresh</span>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 font-normal">Event</th>
                  <th className="text-left py-2 px-3 font-normal">Time</th>
                  <th className="text-left py-2 px-3 font-normal">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3">Initial Jobless Claims</td>
                  <td className="py-2 px-3">08:30 AM</td>
                  <td className="py-2 px-3">High</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">FOMC Meeting Minutes</td>
                  <td className="py-2 px-3">02:00 PM</td>
                  <td className="py-2 px-3">Medium</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">GDP Annualized QoQ</td>
                  <td className="py-2 px-3">08:30 AM</td>
                  <td className="py-2 px-3">High</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="grid gap-1.5">
              <CardTitle>News & Insights</CardTitle>
              <CardDescription>Latest financial news and market insights.</CardDescription>
            </div>
            <Button className="ml-auto rounded-full" size="icon" variant="outline">
              <FiRefreshCw className="w-4 h-4" />
              <span className="sr-only">Refresh</span>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-start gap-4">
              <img
                alt="Cover image"
                className="rounded-md object-cover"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/80",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div className="grid gap-1.5">
                <div className="font-semibold text-lg">Fed signals it's getting ready to hike rates</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  The Federal Reserve on Wednesday signaled that it is getting ready to hike...
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Cover image"
                className="rounded-md object-cover"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/80",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div className="grid gap-1.5">
                <div className="font-semibold text-lg">Tech stocks tumble as inflation fears rise</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Shares of major tech companies tumbled on Monday as investors grew more concerned...
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="grid gap-1.5">
              <CardTitle>Portfolio Tracker</CardTitle>
              <CardDescription>Track your investment portfolio.</CardDescription>
            </div>
            <Button className="ml-auto rounded-full" size="icon" variant="outline">
              <FiRefreshCw className="w-4 h-4" />
              <span className="sr-only">Refresh</span>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">AAPL</div>
              <div className="text-right">+0.75%</div>
              <div className="text-right">42.56</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">GOOGL</div>
              <div className="text-right">-0.25%</div>
              <div className="text-right">756.89</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">TSLA</div>
              <div className="text-right">+1.20%</div>
              <div className="text-right">800.00</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">BTC</div>
              <div className="text-right">+0.75%</div>
              <div className="text-right">34256.00</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">ETH</div>
              <div className="text-right">-0.25%</div>
              <div className="text-right">2756.89</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="font-semibold">DOGE</div>
              <div className="text-right">+1.20%</div>
              <div className="text-right">0.00</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

