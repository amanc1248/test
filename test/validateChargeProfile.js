 const statusHi = [
  { value: 'CHASSISPICK/arrived', label: 'CHASSISPICK_ARRIVED' },
  { value: 'CHASSISPICK/departed', label: 'CHASSISPICK_DEPARTED' },
  { value: 'PULLCONTAINER/arrived', label: 'PULLCONTAINER_ARRIVED' },
  { value: 'PULLCONTAINER/departed', label: 'PULLCONTAINER_DEPARTED' },
  { value: 'DELIVERLOAD/arrived', label: 'DELIVERLOAD_ARRIVED' },
  { value: 'DELIVERLOAD/departed', label: 'DELIVERLOAD_DEPARTED' },
  { value: 'DROPCONTAINER/arrived', label: 'DROPCONTAINER_ARRIVED' },
  { value: 'DROPCONTAINER/departed', label: 'DROPCONTAINER_DEPARTED' },
  { value: 'STOPOFF/arrived', label: 'STOPOFF_ARRIVED' },
  { value: 'STOPOFF/departed', label: 'STOPOFF_DEPARTED' },
  { value: 'HOOKCONTAINER/arrived', label: 'HOOKCONTAINER_ARRIVED' },
  { value: 'HOOKCONTAINER/departed', label: 'HOOKCONTAINER_DEPARTED' },
  { value: 'RETURNCONTAINER/arrived', label: 'RETURNCONTAINER_ARRIVED' },
  { value: 'RETURNCONTAINER/departed', label: 'RETURNCONTAINER_DEPARTED' },
  { value: 'CHASSISTERMINATION/arrived', label: 'CHASSISTERMINATION_ARRIVED' },
  { value: 'CHASSISTERMINATION/departed', label: 'CHASSISTERMINATION_DEPARTED' },
  { value: 'COMPLETED/loadCompletedAt', label: 'COMPLETED'},
  { value: 'PICKUP/apt', label: 'PICKUP APT'},
  { value: 'DELIVERY/apt', label: 'DELIVERY APT'},
  { value: 'RETURN/apt', label: 'RETURN APT'},
  { value: 'READY_TO_RETURN/apt', label: 'READY TO RETURN'},
  { value: 'POD_IN/apt', label: 'POD IN'},
  { value: 'POD_OUT/apt', label: 'POD OUT'},
]

const statusObj = {} 
statusHi.forEach(element => {
  const eventName = element?.value?.split("/")[0];
  statusObj[eventName] = eventName; 
});
console.log(statusObj)