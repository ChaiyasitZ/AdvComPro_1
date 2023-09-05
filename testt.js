const subnetRequirements = [
  { subnet: 1, hosts: 1000 },
  { subnet: 2, hosts: 400 },
  { subnet: 3, hosts: 200 },
  { subnet: 4, hosts: 100 },
  { subnet: 5, hosts: 60 },
];

function calculateVLSM(subnetRequirements) {
  const baseIP = "10.0.0.0";
  let currentIP = baseIP;
  let subnetMask = 8; // Initialize the subnet mask length for a Class A IP address

  // Check the IP class and set the subnet mask accordingly
  const checkIpClass = baseIP.split('.');
  if (checkIpClass[0] < 128) {
      subnetMask = 8;
  } else if (checkIpClass[0] < 192) {
      subnetMask = 16;
  } else if (checkIpClass[0] < 224) {
      subnetMask = 24;
  } else {
      console.log("Invalid IP Address");
      return;
  }

  for (let i = 0; i < subnetRequirements.length; i++) {
      const subnet = subnetRequirements[i];
      const bitsNeeded = Math.ceil(Math.log2(subnet.hosts + 2));
      const subnetSize = Math.pow(2, 32 - subnetMask - bitsNeeded);
      const FirstHost = addIP(currentIP, 1);
      const LastHost = addIP(currentIP, subnetSize - 2);
      const Broadcast = addIP(currentIP, subnetSize - 1);

      console.log(`Subnet ${subnet.subnet} needed: ${subnet.hosts} hosts`);
      console.log(`Network ID: ${currentIP}/${32 - bitsNeeded}`);
      console.log(`First IP: ${FirstHost}/${32 - bitsNeeded}`);
      console.log(`Last IP: ${LastHost}/${32 - bitsNeeded}`);
      console.log(`Broadcast Address: ${Broadcast}/${32 - bitsNeeded}`);
      console.log("");

      // Update the current IP for the next subnet
      currentIP = addIP(currentIP, subnetSize);
  }
}

function addIP(ipAddress, add) {
  const ipParts = ipAddress.split('.').map(Number);
  let carry = 0;

  for (let i = 3; i >= 0; i--) {
      ipParts[i] += carry;

      if (i === 3) {
          ipParts[i] += add;
      }

      carry = Math.floor(ipParts[i] / 256);
      ipParts[i] = ipParts[i] % 256;
  }

  return ipParts.join('.');
}

calculateVLSM(subnetRequirements);
