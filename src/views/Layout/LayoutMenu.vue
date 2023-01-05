<template>
  <ElScrollbar>
    <ElMenu :default-openeds="['1', '3']">
      <ElSubMenu index="1">
        <template #title>
          <ElIcon><message /></ElIcon>Navigator One
        </template>
        <ElMenuItemGroup>
          <template #title>Group 1</template>
          <ElMenuItem index="1-1">Option 1</ElMenuItem>
          <ElMenuItem index="1-2">Option 2</ElMenuItem>
        </ElMenuItemGroup>
        <ElMenuItemGroup title="Group 2">
          <ElMenuItem index="1-3">Option 3</ElMenuItem>
        </ElMenuItemGroup>
        <ElSubMenu index="1-4">
          <template #title>Option4</template>
          <ElMenuItem index="1-4-1">Option 4-1</ElMenuItem>
        </ElSubMenu>
      </ElSubMenu>
      <ElSubMenu index="2">
        <template #title>
          <el-icon><icon-menu /></el-icon>Navigator Two
        </template>
        <ElMenuItemGroup>
          <template #title>Group 1</template>
          <ElMenuItem index="2-1">Option 1</ElMenuItem>
          <ElMenuItem index="2-2">Option 2</ElMenuItem>
        </ElMenuItemGroup>
        <ElMenuItemGroup title="Group 2">
          <ElMenuItem index="2-3">Option 3</ElMenuItem>
        </ElMenuItemGroup>
        <ElSubMenu index="2-4">
          <template #title>Option 4</template>
          <ElMenuItem index="2-4-1">Option 4-1</ElMenuItem>
        </ElSubMenu>
      </ElSubMenu>
      <ElSubMenu index="3">
        <template #title>
          <el-icon><setting /></el-icon>Navigator Three
        </template>
        <ElMenuItemGroup>
          <template #title>Group 1</template>
          <ElMenuItem index="3-1">Option 1</ElMenuItem>
          <ElMenuItem index="3-2">Option 2</ElMenuItem>
        </ElMenuItemGroup>
        <ElMenuItemGroup title="Group 2">
          <ElMenuItem index="3-3">Option 3</ElMenuItem>
        </ElMenuItemGroup>
        <ElSubMenu index="3-4">
          <template #title>Option 4</template>
          <ElMenuItem index="3-4-1">Option 4-1</ElMenuItem>
        </ElSubMenu>
      </ElSubMenu>
    </ElMenu>
  </ElScrollbar>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
