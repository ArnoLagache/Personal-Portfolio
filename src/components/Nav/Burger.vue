<template>
    <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
        <slot>
            <button type="button" id="burger-button" title="Menu">
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
            </button>
        </slot>
    </div>
</template>

<script>
import { store, mutations } from '@/store.js'

export default {
    name: 'Burger',
    computed: {
        isBurgerActive() {
            return store.isNavOpen
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
}
</script>