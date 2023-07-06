<template>
  <form class="register-form" @submit.prevent="onSubmit">
    <label for="name">Name: </label>
    <input id="name" type="text" v-model="name" />
    <br />

    <label for="dob">Date of Birth:</label>
    <input id="dob" type="date" v-model="dob" />
    <br />

    <label for="currentDate">Current Date:</label>
    <input id="currentDate" type="date" v-model="currentDate" />
    <br />

    <button type="submit" @click="calculateAge">Click Me</button>
    <br />

    <div v-if="age !== null || isNaN(age)" id="output-div">
      <h3>Your Age: {{ age }}</h3>
      <h3>You have Lived:</h3>
      <h3>{{ ageInMonths }} Months</h3>
      <h3>{{ ageInDays }} Days</h3>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      dob: "",
      currentDate: "",
      age: null,
      ageInMonths: null,
      ageInDays: null,
    };
  },

  methods: {
    onSubmit() {
      if (this.name === "" || this.dob === "" || this.currentDate === "") {
        alert("Enter all the fields");
        return;
      }
    },

    calculateAgeMethod() {
      const birthDate = new Date(this.dob);
      const currentDateTime = new Date(this.currentDate);

      const ageInMilliseconds = currentDateTime.getTime() - birthDate.getTime();
      const age_ds = currentDateTime.getTime() - birthDate.getTime();
      const age_dt = new Date(age_ds);
      const year = age_dt.getFullYear();
      var age = Math.floor(year - 1970);
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInMinutes = ageInSeconds / 60;
      const ageInHours = ageInMinutes / 60;
      const ageInDays = ageInHours / 24;
      const ageInMonths = ageInDays / 30;
      // const ageInYears = ageInMonths / 12;

      this.age = age;
      this.ageInMonths = Math.floor(ageInMonths);
      this.ageInDays = Math.floor(ageInDays);
    },
  },
  computed: {
    calculateAge() {
      const birthDate = new Date(this.dob);
      const currentDateTime = new Date(this.currentDate);

      const ageInMilliseconds = currentDateTime.getTime() - birthDate.getTime();
      const age_ds = currentDateTime.getTime() - birthDate.getTime();
      const age_dt = new Date(age_ds);
      const year = age_dt.getFullYear();
      var age = Math.floor(year - 1970);
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInMinutes = ageInSeconds / 60;
      const ageInHours = ageInMinutes / 60;
      const ageInDays = ageInHours / 24;
      const ageInMonths = ageInDays / 30;
      // const ageInYears = ageInMonths / 12;

      this.age = age;
      this.ageInMonths = Math.floor(ageInMonths);
      this.ageInDays = Math.floor(ageInDays);
    },
  }
};
</script>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

#output-div {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h3 {
  margin-top: 10px;
  font-weight: bold;
}
</style>
