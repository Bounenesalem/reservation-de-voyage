<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {

            $table->id();
            $table->foreignId('destination_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('agency_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->text('Ville_de_depart');
            $table->time('Time');
            $table->text('description');
            $table->date('start_date');
            $table->date('end_date');
            $table->float('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips');
    }
}
