<template>
  <div>
    <br />
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Industry Name</span
        >
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        :disabled="display"
        v-model="industryName"
      />
    </div>
    <h5>Vegetarian Or Not：</h5>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              :disabled="display"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Vegetarian
            </label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              :disabled="display"
            />
            <label class="form-check-label" for="flexRadioDefault2"
              >Vegetarian not available
            </label>
          </div>
        </div>
      </div>
    </div>
    <h5>Meat Origin：</h5>
    <div class="container">
      <div class="row justify-content-start">
        <div class="input-group mb-3 col-4">
          <label class="input-group-text" for="inputGroupSelect01"
            >Pork Origin</label
          >
          <select
            class="form-select"
            id="inputGroupSelect01"
            :disabled="display"
          >
            <option selected>Choose...</option>
            <option value="1">Null</option>
            <option value="2">New Zealand</option>
            <option value="3">USA</option>
            <option value="4">Taiwan</option>
          </select>
        </div>
        <div class="input-group mb-3 col-4">
          <label class="input-group-text" for="inputGroupSelect01"
            >Beef Origin</label
          >
          <select
            class="form-select"
            id="inputGroupSelect01"
            :disabled="display"
          >
            <option selected>Choose...</option>
            <option value="1">Null</option>
            <option value="2">New Zealand</option>
            <option value="3">USA</option>
            <option value="4">Taiwan</option>
          </select>
        </div>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Phone</span
        >
      </div>
      <input
        type="number"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        :disabled="display"
      />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Address</span
        >
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        :disabled="display"
      />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Profile...</span>
      </div>
      <textarea
        class="form-control"
        aria-label="With textarea"
        :disabled="display"
      ></textarea>
    </div>

    <!-- button -->
    <br />
    <div class="row justify-content-center">
      <div class="col-4">
        <button type="button" class="btn btn-dark" @click="editBtn">
          EDIT
        </button>
      </div>
      <div class="col-4">
        <button
          type="button"
          class="btn btn-success"
          @click="confirmBtn"
          :disabled="display"
        >
          CONFIRM!
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
</style>
<script setup>
function editBtn() {
  this.display = !this.display;
}
function confirmBtn() {
  this.display = !this.display;
}
</script>
