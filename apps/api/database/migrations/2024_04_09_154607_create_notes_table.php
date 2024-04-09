<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("notes", function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("content");
            $table->string("color")->default("#f0f2f5");
            $table->boolean("favorite")->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("notes");
    }
};
