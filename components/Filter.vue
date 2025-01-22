<template>
    <div class="filters">
      <div>
        <p>Filter by state</p>
        <div class="badges">
          <div @click="$emit('setFilter', 'todo')" class="badge" :class="{'selected': filterBy === 'todo'}">
            To-Do
          </div>
          <div @click="$emit('setFilter', 'done')" class="badge" :class="{'selected': filterBy === 'done'}">
            Done
          </div>
          <span @click="$emit('setFilter', '')" v-if="filterBy != ''" class="clear">
            x clear
          </span>
        </div>
      </div>
    </div>
</template>

<script setup>
    const props = defineProps(['filterBy']);
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 14px 0;
    align-items: center;

    .selected{
        background: red;
        color: #fff;
    }
  }

  .clear {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
  }

}
</style>