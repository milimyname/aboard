<script lang="ts">
	import { onFormSubmit } from '@lib/hooks/onFormSubmit';
	import { X } from 'lucide-svelte';
	import { drawerStore } from '@skeletonlabs/skeleton';
</script>

<form on:submit|preventDefault={(e) => onFormSubmit(e)} class="p-10 flex flex-col gap-6 text-black">
	<div class="flex justify-between">
		<h1 class="text-3xl font-medium">Create a new issue</h1>
		<button type="button" class="text-black outline-none" on:click={() => drawerStore.close()}>
			<X size={24} />
		</button>
	</div>
	<div class="flex gap-12">
		<label for="title" class="w-10">Title</label>
		<input
			type="text"
			name="title"
			class=" placeholder:text-gray-400 rounded-sm dark:text-black"
			required
		/>
	</div>
	<div class="flex flex-col gap-4 py-12 border-y-2 border-grey-500">
		<div class="flex gap-12">
			<label for="priority" class="w-10">Priority</label>
			<select name="priority" id="priority" class="form-select dark:text-black">
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
		</div>
		<div class="flex gap-12">
			<label for="status" class="w-10">Status</label>
			<select name="status" id="status" class="form-select dark:text-black">
				<option value="backlog">Backlog</option>
				<option value="in-progress">In Progress</option>
				<option value="todo">Pending</option>
				<option value="done">Done</option>
			</select>
		</div>
		<div class="flex gap-12">
			<!-- Select Multiple Options -->
			<label for="label" class="w-10">Label</label>
			<select name="label" id="label" class="form-select dark:text-black" required>
				<option value="feature">Feature</option>
				<option value="bug">Bug</option>
				<option value="design">Design</option>
				<option value="draft">Draft</option>
			</select>
		</div>
		<!-- Date -->
		<div class="flex gap-12">
			<label for="deadline" class="w-10">Deadline</label>
			<input type="date" name="deadline" class="form-input dark:text-black" required />
		</div>
	</div>
	<textarea name="description" class="dark:text-black" />
	<button type="submit" class="bg-black text-white self-end py-2 px-4 rounded-sm">Add</button>
</form>
