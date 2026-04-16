import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Network, Shield, Globe, Info } from 'lucide-react';

export const IPSubnetCalculator: React.FC = () => {
  const [ip, setIp] = useState('192.168.1.1');
  const [mask, setMask] = useState(24);
  
  const [network, setNetwork] = useState('');
  const [broadcast, setBroadcast] = useState('');
  const [firstHost, setFirstHost] = useState('');
  const [lastHost, setLastHost] = useState('');
  const [numHosts, setNumHosts] = useState(0);
  const [netmask, setNetmask] = useState('');
  const [wildcard, setWildcard] = useState('');
  const [ipClass, setIpClass] = useState('');

  const ipToLong = (ip: string) => {
    const parts = ip.split('.').map(Number);
    return (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
  };

  const longToIp = (long: number) => {
    return [
      (long >>> 24) & 0xff,
      (long >>> 16) & 0xff,
      (long >>> 8) & 0xff,
      long & 0xff
    ].join('.');
  };

  useEffect(() => {
    try {
      const ipLong = ipToLong(ip);
      const maskLong = -1 << (32 - mask);
      const networkLong = ipLong & maskLong;
      const broadcastLong = networkLong | ~maskLong;
      
      setNetwork(longToIp(networkLong));
      setBroadcast(longToIp(broadcastLong));
      setFirstHost(longToIp(networkLong + 1));
      setLastHost(longToIp(broadcastLong - 1));
      setNumHosts(Math.pow(2, 32 - mask) - 2);
      setNetmask(longToIp(maskLong));
      setWildcard(longToIp(~maskLong));

      const firstOctet = (ipLong >>> 24) & 0xff;
      if (firstOctet >= 1 && firstOctet <= 126) setIpClass('A');
      else if (firstOctet >= 128 && firstOctet <= 191) setIpClass('B');
      else if (firstOctet >= 192 && firstOctet <= 223) setIpClass('C');
      else if (firstOctet >= 224 && firstOctet <= 239) setIpClass('D (Multicast)');
      else if (firstOctet >= 240 && firstOctet <= 255) setIpClass('E (Experimental)');
    } catch (e) {
      // Invalid IP
    }
  }, [ip, mask]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>IP Subnet Calculator | IPv4 Subnetting & Network Planning</title>
        <meta name="description" content="Free online IP subnet calculator for network engineers. Calculate network address, broadcast, host range, and subnet mask for any IPv4 address in 2026." />
      </Helmet>

      <h1>IP Subnet Calculator</h1>
      <p>Analyze an IPv4 address and subnet mask to determine key network parameters like usable host range, broadcast address, and network class.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Network Configuration</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">IP Address</label>
              <input 
                type="text" 
                value={ip} 
                onChange={(e) => setIp(e.target.value)} 
                className="input-field font-mono" 
                placeholder="e.g., 192.168.1.1"
              />
            </div>
            <div>
              <label className="input-label">Subnet Mask (CIDR)</label>
              <div className="flex items-center gap-3">
                <input 
                  type="range" 
                  min="0" 
                  max="32" 
                  value={mask} 
                  onChange={(e) => setMask(Number(e.target.value))} 
                  className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066cc]" 
                />
                <span className="w-12 text-center font-bold text-[#0066cc]">/{mask}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2 italic">Common masks: /24 (255.255.255.0), /16 (255.255.0.0), /8 (255.0.0.0)</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Subnet Analysis</div>
            <div className="grid grid-cols-1 gap-4">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Network Address</div>
                <div className="text-xl font-mono font-bold text-[#0066cc]">{network}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Usable Host Range</div>
                <div className="text-sm font-mono font-bold text-slate-700">{firstHost} - {lastHost}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Broadcast</div>
                  <div className="text-sm font-mono font-bold">{broadcast}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Hosts</div>
                  <div className="text-sm font-mono font-bold">{numHosts.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase mb-2">Subnet Mask</div>
          <div className="text-sm font-mono font-bold text-slate-700">{netmask}</div>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase mb-2">Wildcard Mask</div>
          <div className="text-sm font-mono font-bold text-slate-700">{wildcard}</div>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase mb-2">IP Class</div>
          <div className="text-sm font-bold text-slate-700">Class {ipClass}</div>
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Comprehensive Guide to IP Subnetting</h2>
        <p>
          IP subnetting is a fundamental skill for network engineers, system administrators, and cybersecurity professionals. Whether you are designing a small home network or a massive corporate infrastructure, our <strong>IP subnet calculator</strong> provides the precision you need to plan your IP address space in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">What is a Subnet?</h3>
        <p>
          A subnet (short for subnetwork) is a logical subdivision of an IP network. The practice of dividing a network into two or more networks is called subnetting. This is done to improve network performance, enhance security, and manage IP addresses more efficiently.
        </p>
        
        <h4 className="font-bold text-slate-900">CIDR Notation Explained</h4>
        <p>
          Classless Inter-Domain Routing (CIDR) is a method for allocating IP addresses and IP routing. It uses a slash followed by a number (e.g., /24) to represent the number of bits in the network prefix. For example, /24 means the first 24 bits are the network portion, leaving 8 bits for hosts (2^8 = 256 addresses).
        </p>

        <h4 className="font-bold text-slate-900">Network vs. Broadcast Addresses</h4>
        <p>
          In every subnet, two addresses are reserved and cannot be assigned to hosts:
        </p>
        <ul>
          <li><strong>Network Address:</strong> The first address in the range, used to identify the network itself.</li>
          <li><strong>Broadcast Address:</strong> The last address in the range, used to send data to all hosts on the subnet simultaneously.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Practical Uses for Subnetting</h3>
        <p>
          Subnetting is critical for several reasons:
        </p>
        <ul>
          <li><strong>Security:</strong> Isolating sensitive departments (like HR or Finance) onto their own subnets to restrict access.</li>
          <li><strong>Performance:</strong> Reducing broadcast traffic by limiting the number of hosts on a single physical network segment.</li>
          <li><strong>Organization:</strong> Grouping devices by location, function, or department for easier management.</li>
          <li><strong>IP Conservation:</strong> Efficiently using limited public IPv4 address space by allocating only what is needed.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the difference between IPv4 and IPv6?</p>
            <p>IPv4 uses 32-bit addresses (e.g., 192.168.1.1), while IPv6 uses 128-bit addresses (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). IPv6 was created to solve the exhaustion of IPv4 addresses.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a private IP address?</p>
            <p>Private IP addresses are reserved for use within a local network and are not routable on the public internet. Common ranges include 192.168.x.x, 172.16.x.x - 172.31.x.x, and 10.x.x.x.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I find my current IP address?</p>
            <p>On Windows, open the Command Prompt and type `ipconfig`. On macOS or Linux, open the Terminal and type `ifconfig` or `ip addr`.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          For the IP <strong>192.168.1.0/24</strong>:
          <br />Subnet Mask: <strong>255.255.255.0</strong>
          <br />Network Address: <strong>192.168.1.0</strong>
          <br />First Usable Host: <strong>192.168.1.1</strong>
          <br />Last Usable Host: <strong>192.168.1.254</strong>
          <br />Broadcast Address: <strong>192.168.1.255</strong>
          <br />Total Usable Hosts: <strong>254</strong>. Our calculator performs these complex binary operations instantly, ensuring your network is planned perfectly.
        </p>
      </div>
    </div>
  );
};
