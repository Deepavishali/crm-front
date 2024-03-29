import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL


export async function fetchTicket() {
  return await axios.get(
    `${BASE_URL}/crm/api/v1/tickets/`,
    {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    },
    {
      userId: localStorage.getItem("userId"),
    }
  );
}

// Post api :

export async function ticketCreation(data) {
  return await axios.post(
    `${BASE_URL}/crm/api/v1/tickets/`,data,
    {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }
  );
}

// PUT API : passing the id of the ticket and the new updated data

export async function ticketUpdation(id, selectedCurrTicket) {
  return await axios.put(
    `${BASE_URL}/crm/api/v1/tickets/${id}`,
    selectedCurrTicket,
    {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    },
    {
      userId: localStorage.getItem("userId"),
    }
  );
}
