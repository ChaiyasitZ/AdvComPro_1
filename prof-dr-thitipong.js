const baseIP = "192.168.0.0";
const prefix = 24;

/**
 * @param {string} ipAddress 
 * @returns {string}
 */
const IpClassCheck = (ipAddress) => {
    ClassCount = 0;
    if (ipAddress[0] >= 0 && ipAddress[0] <= 127) {
        ClassCount = 1;
        return "Class A";
    } else if (ipAddress[0] >= 128 && ipAddress[0] <= 191) {
        ClassCount = 2;
        return "Class B";
    } else if (ipAddress[0] >= 192 && ipAddress[0] <= 223) {
        ClassCount = 3;
        return "Class C";
    } else if (ipAddress[0] >= 224 && ipAddress[0] <= 239) {
        ClassCount = 4;
        return "Class D";
    } else if (ipAddress[0] >= 240 && ipAddress[0] <= 255) {
        ClassCount = 5;
        return "Class E";
    } else {
        return "Error";
    }
};

console.log(`\nIP Address ${baseIP}/${prefix} is ${IpClassCheck(baseIP.split("."))}\n`);

/**
 * @typedef {Object} SubnetRequirement
 * @property {string} Dept 
 * @property {number} hosts
 */
const subnetRequirements = [
    { Dept: "IT", hosts: 8000 },
    { Dept: "IM", hosts: 800 },
    { Dept: "CA", hosts: 200 },
    { Dept: "TA", hosts: 100 },
    { Dept: "Link1", hosts: 2 },
    { Dept: "Link2", hosts: 2 },];

/**
 * @param {object} subnetRequirements 
 */    
function calculateVLSM(subnetRequirements) {
    let currentIP = baseIP;
    for (let i = 0; i < subnetRequirements.length; i++) {
        const subnet = subnetRequirements[i];
        const bitsNeeded = Math.ceil(Math.log2(subnet.hosts + 2)); 
        const subnetSize = Math.pow(2, bitsNeeded);
        const FirstHost = addIP(currentIP, 1);
        const LastHost = addIP(currentIP, (subnetSize - 2));
        const Broadcast = addIP(currentIP, (subnetSize - 1));
        console.log(`Dept: ${subnet.Dept}`);
        console.log(`Usable IP: ${subnetSize - 2} \nIp Needed: ${subnet.hosts} \nUnused IP: ${(subnetSize - 2) - subnet.hosts}`);
        console.log(`Network ID: ${currentIP }/${32 - bitsNeeded}`);
        console.log(`First IP: ${FirstHost}/${32 - bitsNeeded}`);
        console.log(`Last IP: ${LastHost}/${32 - bitsNeeded}`);
        console.log(`Broadcast Address: ${Broadcast}/${32 - bitsNeeded}`);
        console.log("");
        currentIP = addIP(currentIP, subnetSize);
    }
}

/**
 * @param {string} ipAddress
 * @param {number} add 
 * @returns {string}
 */
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
  